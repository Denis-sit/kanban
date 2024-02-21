import Button from "../Button/Button";
import styles from "./index.module.css";
import React, { forwardRef, ForwardedRef } from "react";

const ProfileMenu = forwardRef(
  (props: {}, ref: ForwardedRef<HTMLDivElement>) => {
    const handlerButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
    };

    return (
      <div className={styles.container} ref={ref}>
        <Button onClick={handlerButtonClick} styles={styles.button}>
          Profile
        </Button>
        <Button onClick={handlerButtonClick} styles={styles.button}>
          Log Out
        </Button>
      </div>
    );
  }
);

export default ProfileMenu;
