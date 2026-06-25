import type { Segment } from "../lib/types";
import { EditableList } from "./EditableList";

interface Props {
  segments: Segment[];
  onChange: (segments: Segment[]) => void;
}

export function SegmentConfig({ segments, onChange }: Props) {
  return (
    <EditableList<Segment>
      title="Customer segments"
      rows={segments}
      onChange={onChange}
      newRow={() => ({ id: crypto.randomUUID(), name: "New segment", multiplier: 1 })}
      columns={[
        { key: "name", label: "Segment name" },
        { key: "multiplier", label: "Price multiplier (1 = full price)", type: "number" },
      ]}
    />
  );
}
