export type UserRole = "admin" | "consumer";

export type NavItem = {
  label: string;
  path: string;
  icon?: string;
  roles?: UserRole[];
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Compliance Registry",
    path: "/",
    icon: "📊",
    roles: ["admin", "consumer"],
  },
  {
    label: "Signage Registry",
    path: "/signage",
    icon: "📄",
    roles: ["admin"],
  },
];
