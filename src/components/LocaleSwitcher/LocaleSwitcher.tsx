"use client";

import { usePathname, useRouter, Locale } from "@/i18n/routing";
import { useParams } from "next/navigation";

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
    <div>
      <button onClick={() => onLocaleChange("en")}>English</button>
      <button onClick={() => onLocaleChange("uk")}>Українська</button>
    </div>
  );
};

export default LocaleSwitcher;
