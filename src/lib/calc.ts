import type { DemandTier, PricingEvent, Segment } from "./types";

/** Baseline price needed to hit the target margin, before segment/demand adjustments. */
export function baseCostPlusPrice(event: PricingEvent): number {
  const attendees = Math.max(event.expectedAttendees, 1);
  const costPerAttendee = event.fixedCosts / attendees + event.variableCostPerAttendee;
  const margin = Math.min(Math.max(event.targetMarginPct, 0), 99) / 100;
  return costPerAttendee / (1 - margin);
}

export function currentFillPct(event: PricingEvent): number {
  if (event.capacity <= 0) return 0;
  return Math.min((event.currentBookings / event.capacity) * 100, 100);
}

/** The demand tier that applies at the event's current fill level. */
export function activeDemandTier(event: PricingEvent): DemandTier | null {
  const fill = currentFillPct(event);
  const sorted = [...event.demandTiers].sort((a, b) => a.minFillPct - b.minFillPct);
  let active: DemandTier | null = null;
  for (const tier of sorted) {
    if (fill >= tier.minFillPct) active = tier;
  }
  return active;
}

export function priceFor(basePrice: number, segment: Segment, tier: DemandTier): number {
  return basePrice * segment.multiplier * tier.multiplier;
}

export interface PriceMatrixRow {
  segment: Segment;
  prices: { tier: DemandTier; price: number }[];
}

export function priceMatrix(event: PricingEvent): PriceMatrixRow[] {
  const base = baseCostPlusPrice(event);
  const tiers = [...event.demandTiers].sort((a, b) => a.minFillPct - b.minFillPct);
  return event.segments.map((segment) => ({
    segment,
    prices: tiers.map((tier) => ({ tier, price: priceFor(base, segment, tier) })),
  }));
}

/** Attendees needed to cover fixed + variable costs at a given price. Null if price never covers variable cost. */
export function breakeven(event: PricingEvent, price: number): number | null {
  const contributionPerAttendee = price - event.variableCostPerAttendee;
  if (contributionPerAttendee <= 0) return null;
  return Math.ceil(event.fixedCosts / contributionPerAttendee);
}

export interface MarginProjection {
  revenue: number;
  cost: number;
  profit: number;
  marginPct: number;
}

/** Projected margin at current bookings, using a blended price (e.g. the standard segment/tier price). */
export function projectedMargin(event: PricingEvent, blendedPrice: number): MarginProjection {
  const attendees = event.currentBookings;
  const revenue = attendees * blendedPrice;
  const cost = event.fixedCosts + event.variableCostPerAttendee * attendees;
  const profit = revenue - cost;
  const marginPct = revenue > 0 ? (profit / revenue) * 100 : 0;
  return { revenue, cost, profit, marginPct };
}
