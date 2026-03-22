import type { Requirement } from "../types/signage.types";
import RequirementUploadField from "./RequirementUploadField";

const STATUS_LABEL: Record<Requirement["status"], string> = {
  NOT_UPLOADED: "Not uploaded",
  UPLOADED: "Uploaded",
  SUBMITTED: "Submitted",
  VERIFIED: "Verified",
};

type RequirementItemCardProps = {
  requirement: Requirement;
};

export default function RequirementItemCard({
  requirement,
}: RequirementItemCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="font-medium text-ink-primary">{requirement.title}</p>
      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <span>{STATUS_LABEL[requirement.status]}</span>
        {requirement.documents.length > 0 && (
          <span className="text-ink-secondary">
            {requirement.documents.length} file
            {requirement.documents.length === 1 ? "" : "s"}
          </span>
        )}
      </div>
      <RequirementUploadField requirementId={requirement.id} />
    </div>
  );
}
