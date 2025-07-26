"use client";

import Link from "next/link";
import SvgIcon from "../SvgIcon/SvgIcon";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Button from "../Button/Button";
// import { useEffect, useState } from "react";
import PortfolioButton from "../Button/PortfolioButton/PortfolioButton";
import s from "./hero.module.scss";

const Hero = () => {
  // const [dynamicHeight, setDynamicHeight] = useState<number>(300);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const w = Math.min(window.innerWidth, 1280);

  //     const w1 = 768,
  //       h1 = 400;
  //     const w2 = 1280,
  //       h2 = 600;

  //     const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
  //     setDynamicHeight(calculatedHeight);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={`${s.container}  ${s.container__hero}`}>
      <section
        className={s.section__hero}
        // style={{ height: `${dynamicHeight}px` }}
      >
        <div className={s.section__hero__title}>
          <h1 className={s.title}>
            {["W", "E", "B", " ", "S", "T", "U", "D", "I"].map(
              (char, index) => (
                <div key={index} className={s.char} data-text={char}>
                  <span>{char === " " ? "\u00A0" : char}</span>
                </div>
              )
            )}
            <div className={`${s.char} ${s.filled}`} data-text="O">
              <span>O</span>
            </div>
          </h1>
        </div>

        <div className={s.container__text}>
          <p className={s.text}>Свіже рішення для вашого бізнесу</p>

          <div className={s.box__button}>
            <Button className={s.button__hero}>ЗАМОВИТИ САЙТ</Button>
            <PortfolioButton label="До портфоліо">
              <SvgIcon
                id="arrow-right"
                width={24}
                height={24}
                className={s.arrow__PortfolioButton}
              />
            </PortfolioButton>
          </div>
        </div>

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
