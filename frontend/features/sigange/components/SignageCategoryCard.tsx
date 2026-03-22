import { SignageCategory } from "../types/signage.types";
import RequirementGroupSection from "./RequirementGroupSection";

export default function SignageCategoryCard({
  category,
}: {
  category: SignageCategory;
}) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-ink-primary">{category.title}</h2>

      <div className="mt-4 space-y-4">
        {category.groups.map((group) => (
          <RequirementGroupSection key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
