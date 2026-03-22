type RequirementUploadFieldProps = {
  requirementId: string;
  disabled?: boolean;
};

export default function RequirementUploadField({
  requirementId,
  disabled,
}: RequirementUploadFieldProps) {
  const inputId = `upload-${requirementId}`;
  return (
    <div className="mt-3">
      <label
        htmlFor={inputId}
        className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-surface-accent-border bg-surface-accent px-3 py-2 text-sm font-medium text-ink-secondary transition hover:bg-white hover:text-ink-primary"
      >
        <span className="text-ink-muted">📎</span>
        Choose file
        <input
          id={inputId}
          name={inputId}
          type="file"
          className="sr-only"
          disabled={disabled}
        />
      </label>
    </div>
  );
}
