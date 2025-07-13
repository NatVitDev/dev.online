'use client';

import React, { useState, useEffect } from 'react';
import s from './Prices.module.scss';
import servicesData from '@/messages/uk.json';
import Link from 'next/link';
import Button from '../Button/Button';

type Service = {
  ServicesId: number;
  ServicesTitle: string;
  ServicesDescription: string;
  ServicesPrice: string;
  ServicesFeatures: string[];
  ServicesLink: string;
};

const Prices = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(servicesData.Services);
  }, []);

  return (
    <section className={s.priceBlock}>
      <h2 className={s.priceBlockTitle}>Прайс</h2>
      <div className={s.priceBlockContainer}>
      {services.map(service => (
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
          <Button className={s.cartButton}>Замовити</Button>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Prices;


