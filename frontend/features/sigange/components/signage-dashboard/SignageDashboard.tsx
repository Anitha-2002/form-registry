"use client";

import { useCallback, useMemo, useState } from "react";
import { useSignageData } from "../../hooks/useSignageData";
import type { RequirementStatus } from "../../types/signage.types";
import {
  computeSignageStats,
  filterFormCategories,
  type StatFilterKey,
} from "../../utils/signageStats";
import SignageCategoryAccordion from "./SignageCategoryAccordion";
import SignagePageHeader from "./SignagePageHeader";
import SignageRequirementsTable from "./SignageRequirementsTable";
import SignageSummaryCards from "./SignageSummaryCards";
import SignageToolbar, { type ViewMode } from "./SignageToolbar";

export default function SignageDashboard() {
  const { data: sourceCategories } = useSignageData();

  const [statKey, setStatKey] = useState<StatFilterKey>("total");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<RequirementStatus | "ALL">(
    "ALL",
  );
  const [categoryId, setCategoryId] = useState<string | "ALL">("ALL");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const filteredCategories = useMemo(
    () =>
      filterFormCategories(sourceCategories, {
        search,
        statusFilter,
        categoryId,
        statKey: statKey === "total" ? null : statKey,
      }),
    [sourceCategories, search, statusFilter, categoryId, statKey],
  );

  const stats = useMemo(
    () => computeSignageStats(sourceCategories),
    [sourceCategories],
  );

  const handleExpandAll = useCallback(() => {
    const ids = filteredCategories.map((c) => c.id);
    setExpandedIds((prev) => {
      const allOpen = ids.length > 0 && ids.every((id) => prev.has(id));
      if (allOpen) return new Set();
      return new Set(ids);
    });
  }, [filteredCategories]);

  const toggleCategory = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <SignagePageHeader
        title="Signage Registry"
        subtitle="Manage OSV-ready documents by requirement."
      />

      <SignageSummaryCards
        stats={stats}
        selected={statKey}
        onSelect={setStatKey}
      />

      <SignageToolbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        categoryId={categoryId}
        onCategoryChange={setCategoryId}
        categories={sourceCategories}
        onExpandAll={handleExpandAll}
      />

      {viewMode === "table" ? (
        <SignageRequirementsTable categories={filteredCategories} />
      ) : filteredCategories.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-200 bg-white p-8 text-center text-sm text-ink-muted">
          No form categories match your filters.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredCategories.map((category) => (
            <SignageCategoryAccordion
              key={category.id}
              category={category}
              expanded={expandedIds.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
