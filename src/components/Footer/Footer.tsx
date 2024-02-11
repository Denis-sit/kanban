import styles from "./index.module.css";

type taskCounter = {
  active: number;
  finished: number;
};

type FooterProps = {
  taskCounter: taskCounter;
};

export default function Footer({ taskCounter }: FooterProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <p>Active tasks: &lt;{taskCounter.active}&gt;</p>
        <p>Finished tasks: &lt;{taskCounter.finished}&gt;</p>
      </div>
      <p>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</p>
    </>
  );
}
