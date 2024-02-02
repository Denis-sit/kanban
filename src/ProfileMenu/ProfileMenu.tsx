import Button from "../Button/Button";
import styles from "./index.module.css";
import { ArrowButtonProps } from "../ArrowButton/ArrowButton";

export default function ProfileMenu({ click }: ArrowButtonProps) {
  function handlerButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
  }

  return (
    <>
      {click && (
        <div className={styles.container}>
          <Button onClick={handlerButtonClick}>Profile</Button>
          <Button onClick={handlerButtonClick}>Log Out</Button>
        </div>
      )}
    </>
  );
}
