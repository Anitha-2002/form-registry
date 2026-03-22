"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAccessibleNav } from "@/shared/utils/getAccessibleNav";

const role = "admin"; // TODO: replace with auth later

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = getAccessibleNav(role);

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 p-4 text-ink-primary">
      {/* App Title */}
      <h2 className="font-bold text-lg mb-6 text-ink-primary">CSR</h2>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 p-2 rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-white text-ink-primary shadow-sm"
                  : "text-ink-secondary hover:bg-white hover:text-ink-primary"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
