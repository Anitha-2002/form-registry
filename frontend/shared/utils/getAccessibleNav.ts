import { NAV_ITEMS, NavItem, UserRole } from "../config/navigation";

export function getAccessibleNav(role: UserRole): NavItem[] {
  return NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(role));
}
