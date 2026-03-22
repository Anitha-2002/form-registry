import type { SignageStats, StatFilterKey } from "../../utils/signageStats";

const LABELS: Record<StatFilterKey, string> = {
  total: "TOTAL",
  notUploaded: "NOT UPLOADED",
  uploaded: "UPLOADED",
  submitted: "SUBMITTED",
  verified: "VERIFIED",
};

type SignageSummaryCardsProps = {
  stats: SignageStats;
  selected: StatFilterKey;
  onSelect: (key: StatFilterKey) => void;
};

const ORDER: StatFilterKey[] = [
  "total",
  "notUploaded",
  "uploaded",
  "submitted",
  "verified",
];

export default function SignageSummaryCards({
  stats,
  selected,
  onSelect,
}: SignageSummaryCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {ORDER.map((key) => {
        const isActive = selected === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            className={`rounded-lg border bg-white px-4 py-3 text-left shadow-sm transition hover:shadow-md ${
              isActive
                ? "border-registry-blue ring-1 ring-registry-blue/30"
                : "border-gray-200"
            }`}
          >
            <p className="text-xs font-semibold tracking-wide text-ink-muted">
              {LABELS[key]}
            </p>
            <p className="mt-1 text-2xl font-bold text-ink-primary">
              {stats[key]}
            </p>
          </button>
        );
      })}
    </div>
  );
}
