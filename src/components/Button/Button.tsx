import React from "react";
import style from "./index.module.css";

type Children = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  styles,
  disabled,
}: Children): JSX.Element {
  return (
    <button
      disabled={disabled}
      className={`${style.button} ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
