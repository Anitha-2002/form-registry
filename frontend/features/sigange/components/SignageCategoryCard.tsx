import { SignageCategory } from "../types/signage.types";
import RequirementGroupSection from "./RequirementGroupSection";

export default function SignageCategoryCard({
  category,
}: {
  category: SignageCategory;
}) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-ink-primary">
        <span className="mr-2 inline-block rounded-md border border-surface-accent-border bg-surface-accent px-2 py-0.5 text-xs font-semibold tracking-wide text-ink-secondary">
          {category.code || "—"}
        </span>
        {category.title}
      </h2>

      <div className="mt-4 space-y-4">
        {category.groups.map((group) => (
          <RequirementGroupSection key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
