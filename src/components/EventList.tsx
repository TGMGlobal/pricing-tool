import type { PricingEvent } from "../lib/types";

interface Props {
  events: PricingEvent[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function EventList({ events, selectedId, onSelect, onCreate, onDuplicate, onDelete }: Props) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Saved events</h2>
        <button
          onClick={onCreate}
          className="rounded bg-purple-600 px-2 py-1 text-sm text-white hover:bg-purple-700"
        >
          + New
        </button>
      </div>
      <ul className="flex flex-col gap-1">
        {events.map((e) => (
          <li
            key={e.id}
            className={`flex items-center justify-between rounded px-2 py-1 text-sm ${
              e.id === selectedId ? "bg-purple-50 text-purple-800" : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <button className="flex-1 text-left" onClick={() => onSelect(e.id)}>
              {e.name || "Untitled event"}
            </button>
            <div className="flex shrink-0 gap-1">
              <button
                onClick={() => onDuplicate(e.id)}
                className="rounded px-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Duplicate"
              >
                ⧉
              </button>
              <button
                onClick={() => onDelete(e.id)}
                className="rounded px-1 text-red-400 hover:bg-red-50 hover:text-red-600"
                aria-label="Delete"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
        {events.length === 0 && <p className="text-sm text-gray-400">No saved events yet.</p>}
      </ul>
    </div>
  );
}
