"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        if (i === openIndex) {
          el.style.height = `${el.scrollHeight}px`;
        } else {
          el.style.height = "0px";
        }
      }
    });
  }, [openIndex]);

  return (
    <section className={s.FAQBlock}>
      <div className={s.container}>
        <h2 className={s.FAQBlockTitle}>{t("title")}</h2>
        <p className={s.FAQBlockRequesr}>{t("faq-request")}</p>
        <div className={s.FAQList}>
          {faqItems.map((item, index) => (
            <div key={index} className={s.FAQItem}>
              <button
                className={s.FAQQuestion}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
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
              <div
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={`${s.FAQAnswerWrapper}`}
              >
                <div className={s.FAQAnswer}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
