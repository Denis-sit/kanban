import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import HeaderPanel from './components/Header/HeaderPanel';
import Footer from './components/Footer/Footer';
import { IIssues, IStatusItem } from './TypeData';

import Description from './components/Task/Description/Description';
import { updateData } from './utilis/updateData';

function App() {
	const [newData, setNewData] = useState(() => {
		const localData = localStorage.getItem('data');
		return localData ? JSON.parse(localData) : data;
	});
	const [taskCounter, setTaskCounter] = useState({
		active: newData.find((item: IIssues) => item.id === '1').issues.length,
		finished: newData.find((item: IIssues) => item.id === '4').issues.length,
	});

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(newData));
		setTaskCounter({
			active: newData[0].issues.length,
			finished: newData[3].issues.length,
		});
	}, [newData]);

	const handleUpdateDate = (
		bordTitle: string,
		value: IIssues,
		flag: string,
	) => {
		setNewData(updateData(bordTitle, value, flag, newData));
	};

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
										id={item.id}
										handleUpdateDate={handleUpdateDate}
										key={item.id}
										selectData={i > 0 ? newData[i - 1].issues : false}
									/>
								))}
							</main>
						}
					/>

					<Route
						path="/task/:id"
						element={<Description handleUpdateDate={handleUpdateDate} />}
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
