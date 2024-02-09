import "./App.css";
import data from "./data";
import { useState } from "react";
import Board from "./components/Board/Board";
import HeaderPanel from "./components/Header/HeaderPanel";
import Footer from "./components/Footer/Footer";
import { IIssues } from "./TypeData";
import { v4 as uuid } from "uuid";

function App() {
  const [newData, setNewData] = useState(data);

  function updateData(title: string, value: IIssues) {
    const updatedData = newData.map((item) => {
      if (item.title === title) {
        return { ...item, issues: [...item.issues, value] };
      } else {
        return {
          ...item,
          issues: item.issues.filter((task) => task.id !== value.id),
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
        {newData.map((item, i) => (
          <Board
            title={item.title}
            issues={item.issues}
            updateData={updateData}
            key={uuid()}
            selectData={i > 0 ? newData[i - 1].issues : false}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
