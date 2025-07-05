"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

type NavProps = {
  closeMenu?: () => void;
};

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const t = useTranslations("Navigation");

  const handleLinkClick = () => {
    closeMenu?.();
  };
  const navItems = [
    { label: t("About"), href: "#About" },
    { label: t("Portfolio"), href: "#Portfolio" },
    { label: t("Prices"), href: "#Prices" },
    { label: t("FAQ"), href: "#FAQ" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} onClick={handleLinkClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
