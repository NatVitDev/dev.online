"use client";

import React from "react";
import s from "./button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  // size?: "282" | "252" | "407" | "full";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  // size = "213",
}) => {
  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
