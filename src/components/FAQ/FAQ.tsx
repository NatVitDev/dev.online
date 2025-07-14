"use client";

import React, { useState } from "react";
import { useTranslations, useMessages } from "next-intl";
import s from "./FAQ.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const t = useTranslations("Faq");
  const messages = useMessages();

  const faqMessages = messages.Faq;
  const faqItems: FaqItem[] = [];

  if (faqMessages) {
    Object.keys(faqMessages).forEach((key) => {
      if (key.startsWith("item")) {
        faqItems.push({
          question: faqMessages[key].question,
          answer: faqMessages[key].answer,
        });
      }
    });
  }

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={s.FAQBlock}>
      <div className={s.container}>
        <h2 className={s.FAQBlockTitle}>{t("title")}</h2>
        <div className={s.FAQList}>
          {faqItems.map((item, index) => (
            <div key={index} className={s.FAQItem}>
              <button
                className={s.FAQQuestion}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.question}</span>
                <span className={s.icon}>
                  <img
                    src={openIndex === index ? "/close.svg" : "/plus.svg"}
                    alt={openIndex === index ? "Закрити" : "Відкрити"}
                    width={24}
                    height={24}
                    aria-hidden="true"
                    draggable={false}
                  />
                </span>
              </button>
              {openIndex === index && (
                <div
                  className={s.FAQAnswer}
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

