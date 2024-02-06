import "./App.css";
import data from "./data";
import { useState } from "react";
import Board from "./components/Board/Board";
import HeaderPanel from "./components/Header/HeaderPanel";
import Footer from "./components/Footer/Footer";
import { IIssues } from "./TypeData";

function App() {
  const [newData, setNewData] = useState(data);

  function updateData(title: string, value: IIssues[]) {
    const updatedData = newData.map((item) =>
      item.title === title && value ? { ...item, issues: value } : item
    );

    setNewData(updatedData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderPanel />
      </header>
      <main className="main">
        <Board
          title={newData[0].title}
          issues={newData[0].issues}
          updateData={updateData}
        />
        <Board
          title={newData[1].title}
          issues={newData[1].issues}
          updateData={updateData}
        />
        <Board
          title={newData[2].title}
          issues={newData[2].issues}
          updateData={updateData}
        />
        <Board
          title={newData[3].title}
          issues={newData[3].issues}
          updateData={updateData}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
