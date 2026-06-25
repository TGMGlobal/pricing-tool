import type { EventKind, PricingEvent } from "../lib/types";

interface Props {
  event: PricingEvent;
  onChange: (event: PricingEvent) => void;
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1 text-sm text-gray-600">
      {label}
      <input
        {...props}
        className="rounded border border-gray-300 px-2 py-1 text-gray-900 focus:border-purple-500 focus:outline-none"
      />
    </label>
  );
}

export function EventForm({ event, onChange }: Props) {
  const set = <K extends keyof PricingEvent>(key: K, value: PricingEvent[K]) =>
    onChange({ ...event, [key]: value });

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Event details</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Field
          label="Name"
          value={event.name}
          onChange={(e) => set("name", e.target.value)}
        />
        <label className="flex flex-col gap-1 text-sm text-gray-600">
          Type
          <select
            value={event.kind}
            onChange={(e) => set("kind", e.target.value as EventKind)}
            className="rounded border border-gray-300 px-2 py-1 text-gray-900 focus:border-purple-500 focus:outline-none"
          >
            <option value="one-off">One-off event/workshop</option>
            <option value="recurring">Recurring session</option>
          </select>
        </label>
        <Field
          label="Capacity"
          type="number"
          min={0}
          value={event.capacity}
          onChange={(e) => set("capacity", Number(e.target.value))}
        />
        <Field
          label="Current bookings"
          type="number"
          min={0}
          value={event.currentBookings}
          onChange={(e) => set("currentBookings", Number(e.target.value))}
        />
        <Field
          label="Expected attendees (for cost split)"
          type="number"
          min={1}
          value={event.expectedAttendees}
          onChange={(e) => set("expectedAttendees", Number(e.target.value))}
        />
        <Field
          label="Fixed costs ($)"
          type="number"
          min={0}
          value={event.fixedCosts}
          onChange={(e) => set("fixedCosts", Number(e.target.value))}
        />
        <Field
          label="Variable cost / attendee ($)"
          type="number"
          min={0}
          value={event.variableCostPerAttendee}
          onChange={(e) => set("variableCostPerAttendee", Number(e.target.value))}
        />
        <Field
          label="Target margin (%)"
          type="number"
          min={0}
          max={99}
          value={event.targetMarginPct}
          onChange={(e) => set("targetMarginPct", Number(e.target.value))}
        />
      </div>
    </div>
  );
}
