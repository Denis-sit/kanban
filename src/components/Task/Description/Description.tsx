import styles from "./index.module.css";
import { useLocation } from "react-router-dom";

export default function Description() {
  const location = useLocation();
  const { task } = location.state;
  return (
    <div className={styles.container}>
      <h3>{task.name}</h3>
      <div>{task.description}</div>
    </div>
  );
}
