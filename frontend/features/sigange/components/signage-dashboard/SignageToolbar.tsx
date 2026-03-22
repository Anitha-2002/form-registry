import type { FormCategory } from "../../types/signage.types";
import type { RequirementStatus } from "../../types/signage.types";

export type ViewMode = "grid" | "table";

type SignageToolbarProps = {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: RequirementStatus | "ALL";
  onStatusFilterChange: (value: RequirementStatus | "ALL") => void;
  categoryId: string | "ALL";
  onCategoryChange: (value: string | "ALL") => void;
  categories: FormCategory[];
  onExpandAll: () => void;
};

export default function SignageToolbar({
  viewMode,
  onViewModeChange,
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  categoryId,
  onCategoryChange,
  categories,
  onExpandAll,
}: SignageToolbarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="inline-flex rounded-lg border border-surface-accent-border bg-surface-accent p-0.5 text-sm font-medium text-ink-secondary">
        <button
          type="button"
          onClick={() => onViewModeChange("grid")}
          className={`rounded-md px-3 py-1.5 transition ${
            viewMode === "grid"
              ? "bg-white text-ink-primary shadow-sm"
              : "hover:text-ink-primary"
          }`}
        >
          Grid View
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange("table")}
          className={`rounded-md px-3 py-1.5 transition ${
            viewMode === "table"
              ? "bg-white text-ink-primary shadow-sm"
              : "hover:text-ink-primary"
          }`}
        >
          Table View
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
        <label className="relative flex min-w-0 flex-1 sm:min-w-[200px] lg:max-w-md">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted">
            🔍
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search requirements..."
            className="w-full rounded-md border border-surface-accent-border bg-surface-accent py-2 pl-9 pr-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-registry-blue focus:outline-none focus:ring-1 focus:ring-registry-blue"
          />
        </label>

        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusFilterChange(e.target.value as RequirementStatus | "ALL")
          }
          className="rounded-md border border-surface-accent-border bg-surface-accent px-3 py-2 text-sm text-ink-secondary focus:border-registry-blue focus:outline-none focus:ring-1 focus:ring-registry-blue"
        >
          <option value="ALL">All Statuses</option>
          <option value="NOT_UPLOADED">Not uploaded</option>
          <option value="UPLOADED">Uploaded</option>
          <option value="SUBMITTED">Submitted</option>
          <option value="VERIFIED">Verified</option>
        </select>

        <select
          value={categoryId}
          onChange={(e) =>
            onCategoryChange(
              e.target.value === "ALL" ? "ALL" : e.target.value,
            )
          }
          className="rounded-md border border-surface-accent-border bg-surface-accent px-3 py-2 text-sm text-ink-secondary focus:border-registry-blue focus:outline-none focus:ring-1 focus:ring-registry-blue"
        >
          <option value="ALL">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.code ? `${c.code} — ${c.title}` : c.title}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={onExpandAll}
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-surface-accent-border bg-surface-accent px-3 py-2 text-sm font-medium text-ink-secondary hover:bg-white"
        >
          <span aria-hidden>⇅</span>
          Expand All
        </button>
      </div>
    </div>
  );
}
