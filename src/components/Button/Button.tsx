import React from "react";
import style from "./index.module.css";

type Children = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
};

export default function Button({
  children,
  onClick,
  styles,
}: Children): JSX.Element {
  return (
    <button className={`${style.button} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}
