import "./App.css";
import data from "./data";
import { useState, useEffect } from "react";
import Board from "./components/Board/Board";
import HeaderPanel from "./components/Header/HeaderPanel";
import Footer from "./components/Footer/Footer";
import { IIssues, IStatusItem } from "./TypeData";

function App() {
  const [newData, setNewData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : data;
  });
  const [taskCounter, settaskCounter] = useState({
    active: newData[2].issues.length,
    finished: newData[3].issues.length,
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(newData));
    settaskCounter({
      active: newData[2].issues.length,
      finished: newData[3].issues.length,
    });
  }, [newData]);

  function updateData(title: string, value: IIssues, flag?: boolean) {
    const updatedData = newData.map((item: IStatusItem) => {
      if (item.title === title && flag) {
        const tasks = item.issues.filter(
          (item: IIssues) => item.id !== value.id
        );
        return { ...item, issues: tasks };
      } else if (item.title === title) {
        return { ...item, issues: [...item.issues, value] };
      } else {
        return {
          ...item,
          issues: item.issues.filter((task: IIssues) => task.id !== value.id),
        };
      }
    });
    setNewData(updatedData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderPanel />
      </header>
      <main className="main">
        {newData.map((item: IStatusItem, i: number) => (
          <Board
            title={item.title}
            issues={item.issues}
            updateData={updateData}
            key={item.title}
            selectData={i > 0 ? newData[i - 1].issues : false}
          />
        ))}
      </main>
      <footer>
        <Footer taskCounter={taskCounter} />
      </footer>
    </div>
  );
}

export default App;
