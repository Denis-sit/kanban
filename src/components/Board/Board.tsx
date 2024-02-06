import styles from "./index.module.css";
import Task from "../Task/Task";
import Button from "../Button/Button";
import { IIssues, IStatusItem } from "../../TypeData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Select from "../Select/Select";

interface BoardProps extends IStatusItem {
  updateData: (title: string, issues: IIssues[]) => void;
}

export default function Board({
  title,
  issues,
  updateData,
}: BoardProps): JSX.Element {
  const [buttonClick, setButtonClick] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submitButton, setSubmitButton] = useState(true);

  function handlerClick() {
    setButtonClick((prev) => !prev);
    setSubmitButton((prev) => !prev);
  }

  function handlerClickSubmit() {
    const task: IIssues = {
      id: uuid(),
      name: inputValue,
    };
    const updatedIssues = [...issues, task];
    updateData(title, updatedIssues);
    setInputValue("");
  }

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.board}>
        <p className={styles.title}>{title}</p>
        {issues.map((task) => (
          <Task name={task.name} key={task.id} />
        ))}

        {buttonClick && title === "Backlog" ? (
          <input
            className={styles.input}
            value={inputValue}
            onChange={handlerChange}
            name="addTask"
            type="text"
          />
        ) : buttonClick && title !== "Backlog" ? (
          <Select issues={issues} />
        ) : null}

        {submitButton && (
          <Button
            disabled={buttonClick && inputValue.trim() === ""}
            styles={styles.button}
            onClick={handlerClick}
          >
            + Add Card
          </Button>
        )}
        {buttonClick && (
          <Button
            disabled={buttonClick && inputValue.trim() === ""}
            styles={styles.button}
            onClick={() => {
              handlerClick();
              handlerClickSubmit();
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </>
  );
}
