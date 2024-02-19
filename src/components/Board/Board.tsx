/* eslint-disable no-restricted-globals */
import styles from './index.module.css';
import Task from '../Task/Task';
import Button from '../Button/Button';
import { IIssues, IStatusItem } from '../../TypeData';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';
import { Action } from '../../utilis/enum';

type SelectData = IIssues[] | boolean;

interface BoardProps extends IStatusItem {
	title: string;
	id: string;
	issues: IIssues[];
	handleUpdateDate: (title: string, issues: IIssues, flag: string) => void;
	key: string;
	selectData: SelectData;
}

export default function Board({
	title,
	issues,
	id,
	handleUpdateDate,
	selectData,
}: BoardProps): JSX.Element {
	const [buttonClick, setButtonClick] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [selectValue, setSelectValue] = useState('');
	let filteredData: IIssues[] = [];

	const selectDataUpdate = () => {
		const task = filteredData.find((issues) => issues.name === selectValue);
		return task;
	};

	const disabled =
		(id !== '1' && selectValue === '') ||
		(id === '1' && inputValue.trim() === '');

	if (Array.isArray(selectData)) {
		filteredData = selectData.filter(
			(item): item is IIssues => !!item,
		) as IIssues[];
	}

	const handlerClick = () => {
		setButtonClick((prev) => !prev);
	};

	const handlerClickSubmit = () => {
		if (inputValue) {
			let task: IIssues = {
				id: uuid(),
				name: inputValue,
			};
			handleUpdateDate(title, task, Action.add);
		} else {
			let task = selectDataUpdate();
			if (task) {
				handleUpdateDate(title, task, Action.next);
			}
		}
		setInputValue('');
		setSelectValue('');
	};

	const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const selectChange = (option: string) => {
		setSelectValue(option);
	};

	const handleDelet = (task: IIssues): void => {
		let alertConfirmTheAction = confirm(
			'Вы действительно хотите удалить задачу?',
		);
		if (alertConfirmTheAction) {
			handleUpdateDate(title, task, Action.delete);
		}
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
									handleDelet(task);
									event.preventDefault();
								}}
							/>
						</Task>
					</Link>
				))}

				{buttonClick && id === '1' && (
					<input
						className={styles.input}
						value={inputValue}
						onChange={handlerInputChange}
						name="addTask"
						type="text"
					/>
				)}

				{buttonClick && id !== '1' && (
					<Select filteredData={filteredData} selectChange={selectChange} />
				)}

				{!buttonClick && (
					<Button
						disabled={false}
						styles={styles.button__add}
						onClick={handlerClick}
					>
						+ Add Card
					</Button>
				)}

				{buttonClick && (
					<Button
						disabled={disabled}
						styles={disabled ? styles.button__disabled : styles.button}
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
