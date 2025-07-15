"use client";

import Link from "next/link";
import SvgIcon from "../SvgIcon/SvgIcon";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import s from "./hero.module.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 1280);

      const w1 = 768,
        h1 = 400;
      const w2 = 1280,
        h2 = 635;

      const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <section>
    <div className={`${s.container}  ${s.container__hero}`}>
      <section
        className={s.section__hero}
        style={{ height: `${dynamicHeight}px` }}
      >
        <h1 className={s.title}>
          {["W", "E", "B", " ", "S", "T", "U", "D", "I"].map((char, index) => (
            <div key={index} className={s.char} data-text={char}>
              <span>{char === " " ? "\u00A0" : char}</span>
            </div>
          ))}
          <div className={`${s.char} ${s.filled}`} data-text="O">
            <span>O</span>
          </div>
        </h1>

        <Button size="282">ЗАМОВИТИ САЙТ</Button>
        <div className={` ${s.container__socialNetworks}`}>
          <div>
            <Link
              href="tel:+380932344567"
              className={`${s.network__list__link} ${s.phone}`}
            >
              <SvgIcon
                id="phone"
                width={24}
                height={24}
                className={`${s.network__list__icon}  `}
              />
            </Link>
          </div>

          <SocialNetworks
            network__list={s.network__list}
            className={s.network__list__link__hero}
            classNameIcon={s.network__list__icon__hero}
          />
        </div>
      </section>
    </div>
  );
};
export default Hero;
