"use client";

import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Nav from "../Nav/Nav";
import Logo from "./Logo";
import { useState, useRef, useEffect } from "react";

import SvgIcon from "../SvgIcon/SvgIcon";
import Button from "../Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  const [showLocale, setShowLocale] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);

  const toggleLocale = () => setShowLocale((prev) => !prev);

  // Закриття при кліку поза меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (localeRef.current && !localeRef.current.contains(e.target as Node)) {
        setShowLocale(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className={`${s.container} ${s.container__header}`}>
        <Logo />

        <div className={s.nav__box}>
          <Nav />

          <Button>ЗВ’ЯЗАТИСЬ</Button>

          <div className={s.locale__wrapper} ref={localeRef}>
            <SvgIcon
              id="icon-language"
              width={48}
              height={48}
              className={s.language}
              onClick={toggleLocale}
            />
            {showLocale && <LocaleSwitcher />}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
