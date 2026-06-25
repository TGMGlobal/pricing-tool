import type { PricingEvent } from "./types";

const STORAGE_KEY = "pricing-tool/events";

export function loadEvents(): PricingEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as PricingEvent[];
  } catch {
    return [];
  }
}

export function saveEvents(events: PricingEvent[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}
