import {
  activeDemandTier,
  baseCostPlusPrice,
  breakeven,
  currentFillPct,
  priceMatrix,
  projectedMargin,
} from "../lib/calc";
import type { PricingEvent } from "../lib/types";

interface Props {
  event: PricingEvent;
}

const money = (n: number) => `$${n.toFixed(2)}`;

export function ResultsPanel({ event }: Props) {
  const base = baseCostPlusPrice(event);
  const matrix = priceMatrix(event);
  const fill = currentFillPct(event);
  const tier = activeDemandTier(event);
  const standardSegment = event.segments.find((s) => s.multiplier === 1) ?? event.segments[0];
  const blendedPrice = standardSegment && tier ? base * standardSegment.multiplier * tier.multiplier : base;
  const margin = projectedMargin(event, blendedPrice);
  const be = breakeven(event, blendedPrice);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900">Recommendation</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Base cost-plus price" value={money(base)} />
        <Stat label="Capacity filled" value={`${fill.toFixed(0)}%`} />
        <Stat label="Active demand tier" value={tier?.label ?? "—"} />
        <Stat
          label="Breakeven attendees"
          value={be === null ? "Never (price below cost)" : String(be)}
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          Recommended price by segment × demand tier
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-gray-200 p-2 text-left text-gray-500">
                  Segment
                </th>
                {event.demandTiers
                  .slice()
                  .sort((a, b) => a.minFillPct - b.minFillPct)
                  .map((t) => (
                    <th
                      key={t.id}
                      className={`border-b border-gray-200 p-2 text-left ${
                        tier?.id === t.id ? "text-purple-700" : "text-gray-500"
                      }`}
                    >
                      {t.label}
                      {tier?.id === t.id && " (current)"}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.segment.id}>
                  <td className="border-b border-gray-100 p-2 font-medium text-gray-900">
                    {row.segment.name}
                  </td>
                  {row.prices.map(({ tier: t, price }) => (
                    <td
                      key={t.id}
                      className={`border-b border-gray-100 p-2 ${
                        tier?.id === t.id ? "bg-purple-50 font-semibold text-purple-800" : "text-gray-700"
                      }`}
                    >
                      {money(price)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          Projected margin at current bookings ({event.currentBookings} attendees, using {standardSegment?.name ?? "base"} price at current tier)
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Revenue" value={money(margin.revenue)} />
          <Stat label="Cost" value={money(margin.cost)} />
          <Stat label="Profit" value={money(margin.profit)} />
          <Stat
            label="Margin"
            value={`${margin.marginPct.toFixed(1)}%`}
            warn={margin.marginPct < event.targetMarginPct}
          />
        </div>
        {margin.marginPct < event.targetMarginPct && (
          <p className="mt-2 text-sm text-amber-600">
            Below target margin of {event.targetMarginPct}%. Consider raising the demand tier
            multiplier, increasing bookings, or reducing variable cost.
          </p>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, warn }: { label: string; value: string; warn?: boolean }) {
  return (
    <div className="rounded border border-gray-100 bg-gray-50 p-2">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`text-base font-semibold ${warn ? "text-amber-600" : "text-gray-900"}`}>
        {value}
      </div>
    </div>
  );
}
