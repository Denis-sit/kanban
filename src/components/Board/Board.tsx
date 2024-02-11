import styles from "./index.module.css";
import Task from "../Task/Task";
import Button from "../Button/Button";
import { IIssues, IStatusItem } from "../../TypeData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Select from "../Select/Select";

type SelectData = IIssues[] | boolean;

interface BoardProps extends IStatusItem {
  title: string;
  issues: IIssues[];
  updateData: (title: string, issues: IIssues) => void;
  key: string;
  selectData: SelectData;
}

export default function Board({
  title,
  issues,
  updateData,
  selectData,
}: BoardProps): JSX.Element {
  const [buttonClick, setButtonClick] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submitButton, setSubmitButton] = useState(true);
  const [selectValue, setSelectValue] = useState("");
  let filteredData: IIssues[] = [];

  const selectDataUpdate = () => {
    const task = filteredData.find((issues) => issues.name === selectValue);
    return task;
  };

  const disabled = buttonClick && inputValue.trim() === "";

  if (Array.isArray(selectData)) {
    filteredData = selectData.filter(
      (item): item is IIssues => !!item
    ) as IIssues[];
  }
  console.log(filteredData, "a");
  function handlerClick() {
    setButtonClick((prev) => !prev);
    setSubmitButton((prev) => !prev);
  }

  function handlerClickSubmit() {
    console.log(inputValue);

    if (inputValue) {
      let task: IIssues = {
        id: uuid(),
        name: inputValue,
      };
      updateData(title, task);
    } else {
      let task = selectDataUpdate();
      if (task) {
        updateData(title, task);
      }
    }
    setInputValue("");
  }

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const selectChange = (option: string) => {
    setSelectValue(option);
  };

  return (
    <>
      <div className={styles.board}>
        <p className={styles.title}>{title}</p>
        {issues.map((task, i) => (
          <Task name={task.name} key={task.id} />
        ))}

        {buttonClick && title === "Backlog" ? (
          <input
            className={styles.input}
            value={inputValue}
            onChange={handlerInputChange}
            name="addTask"
            type="text"
          />
        ) : buttonClick && title !== "Backlog" ? (
          <Select filteredData={filteredData} selectChange={selectChange} />
        ) : null}

        {submitButton && (
          <Button
            disabled={disabled}
            styles={styles.button__add}
            onClick={handlerClick}
          >
            + Add Card
          </Button>
        )}
        {buttonClick && (
          <Button
            disabled={
              title === "Backlog" || selectValue === "" ? disabled : false
            }
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
