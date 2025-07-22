"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinkStyles from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${navLinkStyles.link} ${navLinkStyles.active})`
          : navLinkStyles.link
      }
    >
      {children}
    </Link>
  );
}
