interface Row {
  id: string;
}

interface Props<T extends Row> {
  title: string;
  rows: T[];
  onChange: (rows: T[]) => void;
  newRow: () => T;
  columns: {
    key: keyof T;
    label: string;
    type?: "text" | "number";
  }[];
}

export function EditableList<T extends Row>({
  title,
  rows,
  onChange,
  newRow,
  columns,
}: Props<T>) {
  const update = (id: string, key: keyof T, value: string) => {
    onChange(
      rows.map((row) =>
        row.id === id
          ? { ...row, [key]: columns.find((c) => c.key === key)?.type === "number" ? Number(value) : value }
          : row
      )
    );
  };

  const remove = (id: string) => onChange(rows.filter((row) => row.id !== id));
  const add = () => onChange([...rows, newRow()]);

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button
          onClick={add}
          className="rounded bg-purple-600 px-2 py-1 text-sm text-white hover:bg-purple-700"
        >
          + Add
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-2">
            {columns.map((col) => (
              <input
                key={String(col.key)}
                type={col.type ?? "text"}
                value={String(row[col.key])}
                onChange={(e) => update(row.id, col.key, e.target.value)}
                placeholder={col.label}
                className="min-w-0 flex-1 rounded border border-gray-300 px-2 py-1 text-sm text-gray-900 focus:border-purple-500 focus:outline-none"
              />
            ))}
            <button
              onClick={() => remove(row.id)}
              className="shrink-0 rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
              aria-label="Remove"
            >
              ✕
            </button>
          </div>
        ))}
        {rows.length === 0 && (
          <p className="text-sm text-gray-400">No rows yet.</p>
        )}
      </div>
    </div>
  );
}
