import styles from './index.module.css';
import Task from '../Task/Task';
import Button from '../Button/Button';
import { IIssues, IStatusItem } from '../../TypeData';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';

type SelectData = IIssues[] | boolean;

interface BoardProps extends IStatusItem {
  title: string;
  issues: IIssues[];
  updateData: (title: string, issues: IIssues, flag: string) => void;
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
  const [inputValue, setInputValue] = useState('');
  const [submitButton, setSubmitButton] = useState(true);
  const [selectValue, setSelectValue] = useState('');
  let filteredData: IIssues[] = [];

  const selectDataUpdate = () => {
    const task = filteredData.find((issues) => issues.name === selectValue);
    return task;
  };

  const disabled = buttonClick && inputValue.trim() === '';

  if (Array.isArray(selectData)) {
    filteredData = selectData.filter(
      (item): item is IIssues => !!item,
    ) as IIssues[];
  }

  function handlerClick() {
    setButtonClick((prev) => !prev);
    setSubmitButton((prev) => !prev);
  }

  function handlerClickSubmit() {
    if (inputValue) {
      let task: IIssues = {
        id: uuid(),
        name: inputValue,
      };
      updateData(title, task, 'add');
    } else {
      let task = selectDataUpdate();
      if (task) {
        updateData(title, task, 'next');
      }
    }
    setInputValue('');
  }

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const selectChange = (option: string) => {
    setSelectValue(option);
  };

  const handleDelit = (task: IIssues): void => {
    updateData(title, task, 'delete');
  };

  return (
    <>
      <div className={styles.board}>
        <p className={styles.title}>{title}</p>
        {issues.map((task) => (
          <Link
            className={styles.link}
            to={`/task/${task.id}`}
            state={{ task, title }}
            key={task.id}
          >
            <Task name={task.name} key={task.id}>
              <Button
                styles={styles.button__del}
                onClick={(event) => {
                  event.stopPropagation();
                  handleDelit(task);
                  event.preventDefault();
                }}
              />
            </Task>
          </Link>
        ))}

        {buttonClick && title === 'Backlog' ? (
          <input
            className={styles.input}
            value={inputValue}
            onChange={handlerInputChange}
            name="addTask"
            type="text"
          />
        ) : buttonClick && title !== 'Backlog' ? (
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
              title === 'Backlog' || selectValue === '' ? disabled : false
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
