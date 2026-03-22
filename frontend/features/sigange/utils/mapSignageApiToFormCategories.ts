import type { FormCategory } from "../types/signage.types";
import type { SignageCategoryApi } from "../api/signageApi.types";

/**
 * Maps Django signage API payloads to the UI FormCategory tree.
 * Backend has no requirement status/documents yet — defaults keep the dashboard filters working.
 */
export function mapSignageApiToFormCategories(
  rows: SignageCategoryApi[],
): FormCategory[] {
  return rows.map((c) => ({
    id: String(c.id),
    code: (c.code ?? "").trim(),
    title: (c.name ?? "").trim(),
    groups: (c.requirement_groups ?? []).map((g) => ({
      id: String(g.id),
      title: g.name,
      requirements: (g.requirements ?? []).map((r) => ({
        id: String(r.id),
        title: r.name,
        status: "NOT_UPLOADED" as const,
        documents: [] as string[],
      })),
    })),
  }));
}
