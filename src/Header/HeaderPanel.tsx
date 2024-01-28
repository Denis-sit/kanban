import Profile from "../Profile/Profile";
import styles from "./index.module.css";
import ArrowButton from "../ArrowButton/ArrowButton";

export default function HeaderPanel(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.bord_name}>Awesome Kanban Board</div>
        <div className={styles.container}>
          <Profile />
          <ArrowButton />
        </div>
      </header>
    </>
  );
}
