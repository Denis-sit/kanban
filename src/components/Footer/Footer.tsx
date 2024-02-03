import styles from "./index.module.css";

export default function Footer(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <p>Active tasks: &lt;N&gt;</p>
        <p>Finished tasks: &lt;M&gt;</p>
      </div>
      <p>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</p>
    </>
  );
}
