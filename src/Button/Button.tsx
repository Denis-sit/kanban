import React from "react";
import style from "./index.module.css";

type Children = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: Children): JSX.Element {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
