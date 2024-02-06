import styles from "./index.module.css";

type TNameTask = {
  name: string;
};

export default function Task({ name }: TNameTask) {
  return (
    <>
      <div className={styles.task}>{name}</div>
    </>
  );
}
