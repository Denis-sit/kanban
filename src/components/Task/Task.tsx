import { IStatusItem } from "../../TypeData";
import styles from "./index.module.css";
import { v4 as uuid } from "uuid";

export default function Task({ item }: { item: IStatusItem }) {
  return (
    <>
      {item.title === "Backlog" &&
        item.issues.map((task) => (
          <div key={uuid()} className={styles.task}>
            {task.name}
          </div>
        ))}
      {item.title === "Ready" &&
        item.issues.map((task) => (
          <div key={uuid()} className={styles.task}>
            {task.name}
          </div>
        ))}
      {item.title === "In Progress" &&
        item.issues.map((task) => (
          <div key={uuid()} className={styles.task}>
            {task.name}
          </div>
        ))}
      {item.title === "Finished" &&
        item.issues.map((task) => (
          <div key={uuid()} className={styles.task}>
            {task.name}
          </div>
        ))}
    </>
  );
}
