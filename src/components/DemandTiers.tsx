import type { DemandTier } from "../lib/types";
import { EditableList } from "./EditableList";

interface Props {
  tiers: DemandTier[];
  onChange: (tiers: DemandTier[]) => void;
}

export function DemandTiers({ tiers, onChange }: Props) {
  return (
    <EditableList<DemandTier>
      title="Demand tiers (by % capacity filled)"
      rows={tiers}
      onChange={onChange}
      newRow={() => ({ id: crypto.randomUUID(), label: "New tier", minFillPct: 0, multiplier: 1 })}
      columns={[
        { key: "label", label: "Tier label" },
        { key: "minFillPct", label: "Min fill %", type: "number" },
        { key: "multiplier", label: "Price multiplier", type: "number" },
      ]}
    />
  );
}
