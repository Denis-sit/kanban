import Profile from "../Profile/Profile";
import styles from "./index.module.css";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useState } from "react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function HeaderPanel(): JSX.Element {
  const [click, setClick] = useState(false);

  function clickProfile(): void {
    setClick((prev) => !prev);
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.bord_name}>Awesome Kanban Board</div>
        <div className={styles.button} onClick={clickProfile}>
          <Profile />
          <ArrowButton click={click} />
          {click && <ProfileMenu />}
        </div>
      </header>
    </>
  );
}
