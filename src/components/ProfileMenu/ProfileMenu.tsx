import Button from "../Button/Button";
import styles from "./index.module.css";

export default function ProfileMenu() {
  function handlerButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
  }

  return (
    <div className={styles.container}>
      <Button onClick={handlerButtonClick}>Profile</Button>
      <Button onClick={handlerButtonClick}>Log Out</Button>
    </div>
  );
}
