import { useEffect, useState } from "react";
import { DemandTiers } from "./components/DemandTiers";
import { EventForm } from "./components/EventForm";
import { EventList } from "./components/EventList";
import { ResultsPanel } from "./components/ResultsPanel";
import { SegmentConfig } from "./components/SegmentConfig";
import { loadEvents, saveEvents } from "./lib/storage";
import { newEvent, type PricingEvent } from "./lib/types";

function App() {
  const [events, setEvents] = useState<PricingEvent[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    const stored = loadEvents();
    if (stored.length > 0) {
      setEvents(stored);
      setSelectedId(stored[0].id);
    } else {
      const first = newEvent();
      setEvents([first]);
      setSelectedId(first.id);
    }
  }, []);

  useEffect(() => {
    if (events.length > 0) saveEvents(events);
  }, [events]);

  const selected = events.find((e) => e.id === selectedId);

  const updateSelected = (updated: PricingEvent) =>
    setEvents((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));

  const handleCreate = () => {
    const e = newEvent();
    setEvents((prev) => [...prev, e]);
    setSelectedId(e.id);
  };

  const handleDuplicate = (id: string) => {
    const source = events.find((e) => e.id === id);
    if (!source) return;
    const copy = { ...source, id: crypto.randomUUID(), name: `${source.name} (copy)` };
    setEvents((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  };

  const handleDelete = (id: string) => {
    setEvents((prev) => {
      const next = prev.filter((e) => e.id !== id);
      if (id === selectedId) setSelectedId(next[0]?.id ?? "");
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-1 text-3xl font-semibold text-gray-900">Studio Pricing Tool</h1>
      <p className="mb-6 text-gray-500">
        Cost-based, capacity/demand-aware pricing for events and sessions.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr]">
        <EventList
          events={events}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onCreate={handleCreate}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />

        {selected ? (
          <div className="flex flex-col gap-4">
            <EventForm event={selected} onChange={updateSelected} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SegmentConfig
                segments={selected.segments}
                onChange={(segments) => updateSelected({ ...selected, segments })}
              />
              <DemandTiers
                tiers={selected.demandTiers}
                onChange={(demandTiers) => updateSelected({ ...selected, demandTiers })}
              />
            </div>
            <ResultsPanel event={selected} />
          </div>
        ) : (
          <p className="text-gray-400">Create an event to get started.</p>
        )}
      </div>
    </div>
  );
}

export default App;
