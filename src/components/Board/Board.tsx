import data from "../../data";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";
import Task from "../Task/Task";
import Button from "../Button/Button";
import { useState } from "react";

export default function Board(): JSX.Element {
  console.log(data);
  const [addClick, setAddClick] = useState<Record<string, boolean>>({});

  const dataArray = Object.values(data);
  function handlerClick(title: string): void {
    setAddClick((prev) => {
      if (Object.keys(prev).length === 0) {
        console.log(addClick);

        return { ...prev, [title]: !prev[title] };
      } else {
        console.log(addClick);
        return {};
      }
    });
  }
  return (
    <>
      {dataArray.map((item) => {
        return (
          <div className={styles.board} key={uuid()}>
            <p className={styles.title} key={uuid()}>
              {item.title}
            </p>
            <Task item={item} />
            {addClick[item.title] && (
              <input className={styles.input} name="addTask" type="text" />
            )}
            <Button
              styles={styles.button}
              onClick={() => handlerClick(item.title)}
            >
              {Object.keys(addClick).length === 0 ? "+ Add Card" : "Submit"}
            </Button>
          </div>
        );
      })}
    </>
  );
}
