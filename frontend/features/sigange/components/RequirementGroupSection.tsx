import type { RequirementGroup } from "../types/signage.types";
import RequirementItemCard from "./RequirementItemCard";

export default function RequirementGroupSection({
  group,
}: {
  group: RequirementGroup;
}) {
  return (
    <section className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {group.title}
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        {group.requirements.map((req) => (
          <RequirementItemCard key={req.id} requirement={req} />
        ))}
      </div>
    </section>
  );
}
