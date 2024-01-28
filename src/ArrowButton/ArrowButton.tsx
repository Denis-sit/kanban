import styles from "./index.module.css";

export default function ArrowButton(): JSX.Element {
  return (
    <div className={`${styles.arrow} ${styles.arrow_inactive}`}>Arrow</div>
  );
}
