"use client";

import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/shared/config/navigation";

export default function Header() {
  const pathname = usePathname();

  const activeNav = NAV_ITEMS.find((item) =>
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path),
  );

  const title = activeNav?.label || "Dashboard";

  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 text-ink-primary">
      <h1 className="flex items-center gap-2 text-lg font-semibold text-ink-primary">
        <span aria-hidden>{activeNav?.icon}</span>
        {title}
      </h1>
      <div className="text-sm text-ink-secondary">👤 Guest</div>
    </div>
  );
}
