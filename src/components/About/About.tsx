import { useTranslations } from "next-intl";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./about.module.scss";
import { manrope } from "@/utils/fonts";

const About = () => {
  const t = useTranslations("About");

  const items = t.raw("list") as Array<{
    title: string;
    text: string;
    iconId: string;
  }>;

  return (
    <section className={s.section}>
      <div className={`${s.container}  `}>
        <h2 className={`${s.title} ${manrope.className}`}>
          {t("whyChooseUs")}
        </h2>
        <p className={s.text}>{t("description")}</p>

        <ul className={s.list}>
          {items.map((item) => (
            <li className={s.list__item} key={item.title}>
              <SvgIcon
                id={item.iconId}
                width={40}
                height={40}
                className={s.list__item__icon}
              />
              <h3 className={s.list__item__title}>{item.title}</h3>
              <p className={s.list__item__text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default About;
