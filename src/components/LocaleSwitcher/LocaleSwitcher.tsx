"use client";

import { usePathname, useRouter, Locale } from "@/i18n/routing";
import { useParams } from "next/navigation";
import Button from "../Button/Button";

import s from "./localeSwitcher.module.scss";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onLocaleChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error — типовий виняток із next-intl
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <div className={s.box__localeButton}>
      <Button className={s.localeButton} onClick={() => onLocaleChange("en")}>
        En
      </Button>

      <Button className={s.localeButton} onClick={() => onLocaleChange("uk")}>
        Укр
      </Button>
    </div>
  );
};

export default LocaleSwitcher;
