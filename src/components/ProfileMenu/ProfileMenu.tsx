import Button from "../Button/Button";
import styles from "./index.module.css";

export default function ProfileMenu() {
  function handlerButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
  }

  return (
    <div className={styles.container}>
      <Button onClick={handlerButtonClick} styles={styles.button}>
        Profile
      </Button>
      <Button onClick={handlerButtonClick} styles={styles.button}>
        Log Out
      </Button>
    </div>
  );
}
