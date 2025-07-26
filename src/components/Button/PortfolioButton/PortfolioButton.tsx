"use client";

import React, { ReactNode } from "react";
import s from "./portfolioButton.module.scss";

type Props = {
  label: string;
  children?: ReactNode;
};

const PortfolioButton: React.FC<Props> = ({ label, children }) => {
  return (
    <button className={s.portfolioButton}>
      <span>{label}</span>
      {children && <span className={s.iconWrapper}>{children}</span>}
    </button>
  );
};

export default PortfolioButton;
