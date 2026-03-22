import type { FormCategory, Requirement } from "../../types/signage.types";
import RequirementUploadField from "../RequirementUploadField";

const STATUS_LABEL: Record<Requirement["status"], string> = {
  NOT_UPLOADED: "Not uploaded",
  UPLOADED: "Uploaded",
  SUBMITTED: "Submitted",
  VERIFIED: "Verified",
};

type Row = {
  categoryTitle: string;
  groupTitle: string;
  requirement: FormCategory["groups"][number]["requirements"][number];
};

function flattenRows(categories: FormCategory[]): Row[] {
  return categories.flatMap((cat) =>
    cat.groups.flatMap((group) =>
      group.requirements.map((requirement) => ({
        categoryTitle: cat.title,
        groupTitle: group.title,
        requirement,
      })),
    ),
  );
}

export default function SignageRequirementsTable({
  categories,
}: {
  categories: FormCategory[];
}) {
  const rows = flattenRows(categories);

  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-200 bg-white p-8 text-center text-sm text-ink-muted">
        No requirements match your filters.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-surface-accent text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
          <tr>
            <th className="px-4 py-3">Form category</th>
            <th className="px-4 py-3">Requirement group</th>
            <th className="px-4 py-3">Requirement</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Upload</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(({ categoryTitle, groupTitle, requirement }) => (
            <tr key={requirement.id} className="hover:bg-gray-50/80">
              <td className="align-top px-4 py-3 font-medium text-ink-primary">
                {categoryTitle}
              </td>
              <td className="align-top px-4 py-3 text-ink-secondary">
                {groupTitle}
              </td>
              <td className="align-top px-4 py-3 text-ink-primary">
                {requirement.title}
              </td>
              <td className="align-top px-4 py-3 text-ink-muted">
                {STATUS_LABEL[requirement.status]}
              </td>
              <td className="align-top px-4 py-3">
                <RequirementUploadField requirementId={requirement.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
