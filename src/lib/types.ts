export type EventKind = "one-off" | "recurring";

export interface Segment {
  id: string;
  name: string;
  /** 1 = full price, 0.8 = 20% off, 1.2 = 20% premium */
  multiplier: number;
}

export interface DemandTier {
  id: string;
  label: string;
  /** lower bound of capacity filled, 0-100 */
  minFillPct: number;
  multiplier: number;
}

export interface PricingEvent {
  id: string;
  name: string;
  kind: EventKind;
  capacity: number;
  currentBookings: number;
  expectedAttendees: number;
  fixedCosts: number;
  variableCostPerAttendee: number;
  targetMarginPct: number;
  segments: Segment[];
  demandTiers: DemandTier[];
}

export const defaultSegments: Segment[] = [
  { id: "member", name: "Member", multiplier: 0.85 },
  { id: "standard", name: "Non-member", multiplier: 1 },
  { id: "student", name: "Student/Senior", multiplier: 0.75 },
];

export const defaultDemandTiers: DemandTier[] = [
  { id: "early", label: "Low fill (early bird)", minFillPct: 0, multiplier: 0.9 },
  { id: "standard", label: "Standard", minFillPct: 50, multiplier: 1 },
  { id: "high", label: "High demand", minFillPct: 80, multiplier: 1.15 },
];

export function newEvent(): PricingEvent {
  return {
    id: crypto.randomUUID(),
    name: "New Event",
    kind: "one-off",
    capacity: 20,
    currentBookings: 0,
    expectedAttendees: 15,
    fixedCosts: 200,
    variableCostPerAttendee: 10,
    targetMarginPct: 20,
    segments: defaultSegments.map((s) => ({ ...s })),
    demandTiers: defaultDemandTiers.map((t) => ({ ...t })),
  };
}
