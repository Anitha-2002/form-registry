import Button from "@/shared/components/ui/Button";

type SignagePageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SignagePageHeader({
  title,
  subtitle,
}: SignagePageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-ink-primary tracking-tight">
          {title}
        </h1>
        <p className="mt-1 text-sm text-ink-secondary">{subtitle}</p>
      </div>
      <Button type="button" variant="registry" className="shrink-0">
        + Add
      </Button>
    </div>
  );
}
