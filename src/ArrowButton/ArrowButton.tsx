import styles from "./index.module.css";

export interface ArrowButtonProps {
  click: boolean;
}

export default function ArrowButton({ click }: ArrowButtonProps): JSX.Element {
  return (
    <div
      className={`${styles.arrow} ${
        click ? styles.arrow_active : styles.arrow_inactive
      } `}
    >
      Arrow
    </div>
  );
}
