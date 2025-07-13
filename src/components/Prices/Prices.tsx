"use client";

import React from "react";
import s from "./Prices.module.scss";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";

const Prices = () => {
  const t = useTranslations("Prices");
  const services = t.raw("Services") as Array<{
    ServicesId: number;
    ServicesTitle: string;
    ServicesDescription: string;
    ServicesPrice: string;
    ServicesFeatures: string[];
    ServicesLink: string;
  }>;

  return (
    <section className={s.priceBlock}>
      <h2 className={s.priceBlockTitle}>{t("Title")}</h2>
      <div className={s.priceBlockContainer}>
        {services.map((service) => (
          <div key={service.ServicesId} className={s.card}>
            <div className={s.cardInfo}>
              <h3 className={s.title}>{service.ServicesTitle}</h3>
              <p className={s.description}>{service.ServicesDescription}</p>
              <div className={s.price}>{service.ServicesPrice}</div>
              <ul className={s.featureList}>
                {service.ServicesFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <Button className={s.cartButton}>
              {t("Order")}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;


