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

  return (
    <nav>
      <ul>
        <li>
          <Link href="#About" onClick={handleLinkClick}>
            {t("About")}
          </Link>
        </li>
        <li>
          <Link href="#Portfolio" onClick={handleLinkClick}>
            {t("Portfolio")}
          </Link>
        </li>
        <li>
          <Link href="#Prices" onClick={handleLinkClick}>
            {t("Prices")}
          </Link>
        </li>
        <li>
          <Link href="#FAQ" onClick={handleLinkClick}>
            {t("FAQ")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
