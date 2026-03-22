import type { FormCategory } from "../../types/signage.types";
import { categoryRequirementCounts } from "../../utils/signageStats";
import RequirementGroupSection from "../RequirementGroupSection";

type SignageCategoryAccordionProps = {
  category: FormCategory;
  expanded: boolean;
  onToggle: () => void;
};

export default function SignageCategoryAccordion({
  category,
  expanded,
  onToggle,
}: SignageCategoryAccordionProps) {
  const { total, verified } = categoryRequirementCounts(category);
  const pct = total === 0 ? 0 : Math.round((verified / total) * 100);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-gray-50"
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-surface-accent-border bg-surface-accent text-ink-secondary transition-transform duration-200 ${
            expanded ? "rotate-0" : "-rotate-90"
          }`}
          aria-hidden
        >
          ▼
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ink-primary">{category.title}</p>
          <p className="mt-0.5 text-sm text-ink-muted">
            <span>{total} requirements</span>
            <span className="mx-2 text-ink-muted/40">·</span>
            <span className="font-medium text-status-compliant">
              {verified} compliant
            </span>
          </p>
        </div>
        <div className="hidden w-40 shrink-0 sm:block">
          <div className="h-2 overflow-hidden rounded-full bg-progress-track">
            <div
              className="h-full rounded-full bg-progress-fill transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-1 text-right text-xs font-medium text-ink-secondary">
            {verified}/{total}
          </p>
        </div>
      </button>

      <div className="border-t border-gray-100 px-4 pb-3 sm:hidden">
        <div className="h-2 overflow-hidden rounded-full bg-progress-track">
          <div
            className="h-full rounded-full bg-progress-fill transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-1 text-right text-xs font-medium text-ink-secondary">
          {verified}/{total}
        </p>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50/80 px-4 pb-4 pt-2">
          <div className="space-y-6">
            {category.groups.map((group) => (
              <RequirementGroupSection key={group.id} group={group} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
