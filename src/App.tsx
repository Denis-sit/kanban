import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import HeaderPanel from './components/Header/HeaderPanel';
import Footer from './components/Footer/Footer';
import { IIssues, IStatusItem } from './TypeData';

import Description from './components/Task/Description/Description';

function App() {
  const [newData, setNewData] = useState(() => {
    const localData = localStorage.getItem('data');
    return localData ? JSON.parse(localData) : data;
  });
  const [taskCounter, settaskCounter] = useState({
    active: newData[0].issues.length,
    finished: newData[3].issues.length,
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(newData));
    settaskCounter({
      active: newData[0].issues.length,
      finished: newData[3].issues.length,
    });
  }, [newData]);

  function updateData(bordTitle: string, value: IIssues, flag: string) {
    const updatedData = newData.map((item: IStatusItem) => {
      if (item.title === bordTitle && flag === 'edit') {
        let issues = item.issues.map((obj) => {
          if (obj.id === value.id) {
            return value;
          } else {
            return obj;
          }
        });
        return { ...item, issues: issues };
      } else if (item.title === bordTitle && flag === 'delete') {
        const tasks = item.issues.filter(
          (item: IIssues) => item.id !== value.id,
        );
        return { ...item, issues: tasks };
      } else if (
        item.title === bordTitle &&
        (flag === 'add' || flag === 'next')
      ) {
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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderPanel />
        </header>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route
            path="/task/:id"
            element={<Description updateData={updateData} />}
          />
        </Routes>
        <footer className="footer">
          <Footer taskCounter={taskCounter} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
