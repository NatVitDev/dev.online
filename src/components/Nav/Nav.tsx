"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import s from "./nav.module.scss";

type NavProps = {
  closeMenu?: () => void;
  className?: string;
};

const Nav: React.FC<NavProps> = ({ closeMenu, className = "" }) => {
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
    <ul className={`${s.list} ${className}`}>
      {navItems.map(({ label, href }) => (
        <li className={s.list__item} key={href}>
          <Link href={href} onClick={handleLinkClick}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
