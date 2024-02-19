import { useState } from 'react';
import Button from '../../Button/Button';
import styles from './index.module.css';
import { Link, useLocation } from 'react-router-dom';
import { IIssues } from '../../../TypeData';
import { Action } from '../../../utilis/enum';

interface Task {
	handleUpdateDate: (title: string, issues: IIssues, flag: string) => void;
}

export default function Description({ handleUpdateDate }: Task) {
	const location = useLocation();
	const { task, title } = location.state;
	const [taskName, setTaskName] = useState(task.name);
	const [description, setDescription] = useState(task.description);
	const [click, setClick] = useState(false);

	const onInputNameCgange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTaskName(event.target.value);
	};

	const onInputDescriptionCgange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setDescription(event.target.value);
	};

	const handleEditClick = () => {
		setClick((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<Link to={`/`} className={styles.button__close}>
				&#10006;
			</Link>

			<div className={styles.content}>
				{!click && (
					<>
						<h3 className={styles.task__name} onClick={handleEditClick}>
							{taskName}
						</h3>
						<p className={styles.description} onClick={handleEditClick}>
							{description}
						</p>
					</>
				)}
				{click && (
					<>
						<input
							name="nameTask"
							className={styles.input_name}
							value={taskName}
							onChange={onInputNameCgange}
						/>
						<textarea
							name="nameTask"
							className={styles.description__area}
							onChange={onInputDescriptionCgange}
							value={description || ''}
						/>
						<Button
							styles={styles.button__save}
							onClick={() => {
								handleEditClick();
								handleUpdateDate(
									title,
									{
										name: taskName,
										id: task.id,
										description: description,
									},
									Action.edit,
								);
							}}
						>
							Save
						</Button>
					</>
				)}
			</div>
		</div>
	);
}
