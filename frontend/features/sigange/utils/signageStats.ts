import type { FormCategory, Requirement, RequirementStatus } from "../types/signage.types";

export type SignageStats = {
  total: number;
  notUploaded: number;
  uploaded: number;
  submitted: number;
  verified: number;
};

export type StatFilterKey = keyof SignageStats;

function flattenRequirements(categories: FormCategory[]): Requirement[] {
  return categories.flatMap((c) =>
    c.groups.flatMap((g) => g.requirements),
  );
}

export function computeSignageStats(categories: FormCategory[]): SignageStats {
  const reqs = flattenRequirements(categories);
  return {
    total: reqs.length,
    notUploaded: reqs.filter((r) => r.status === "NOT_UPLOADED").length,
    uploaded: reqs.filter((r) => r.status === "UPLOADED").length,
    submitted: reqs.filter((r) => r.status === "SUBMITTED").length,
    verified: reqs.filter((r) => r.status === "VERIFIED").length,
  };
}

export function categoryRequirementCounts(category: FormCategory): {
  total: number;
  verified: number;
} {
  const reqs = category.groups.flatMap((g) => g.requirements);
  return {
    total: reqs.length,
    verified: reqs.filter((r) => r.status === "VERIFIED").length,
  };
}

function matchesStatFilter(
  status: RequirementStatus,
  statKey: StatFilterKey | null,
): boolean {
  if (statKey == null || statKey === "total") return true;
  const map: Record<StatFilterKey, RequirementStatus | null> = {
    total: null,
    notUploaded: "NOT_UPLOADED",
    uploaded: "UPLOADED",
    submitted: "SUBMITTED",
    verified: "VERIFIED",
  };
  const want = map[statKey];
  return want === null || status === want;
}

export function filterFormCategories(
  categories: FormCategory[],
  options: {
    search: string;
    statusFilter: RequirementStatus | "ALL";
    categoryId: string | "ALL";
    statKey: StatFilterKey | null;
  },
): FormCategory[] {
  const q = options.search.trim().toLowerCase();

  return categories
    .filter((cat) => options.categoryId === "ALL" || cat.id === options.categoryId)
    .map((cat) => {
      const groups = cat.groups
        .map((group) => {
          const requirements = group.requirements.filter((req) => {
            if (options.statusFilter !== "ALL" && req.status !== options.statusFilter) {
              return false;
            }
            if (!matchesStatFilter(req.status, options.statKey)) {
              return false;
            }
            if (!q) return true;
            const hay =
              `${cat.title} ${cat.code} ${group.title} ${req.title}`.toLowerCase();
            return hay.includes(q);
          });
          return { ...group, requirements };
        })
        .filter((g) => g.requirements.length > 0);

      return { ...cat, groups };
    })
    .filter((cat) => {
      if (cat.groups.length > 0) return true;
      if (!q) return true;
      const catHay = `${cat.title} ${cat.code}`.toLowerCase();
      return catHay.includes(q);
    });
}
