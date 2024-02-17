import styles from './index.module.css';
import React, { ReactNode } from 'react';

type TNameTask = {
	name: string;
	children?: ReactNode;
};

const Task: React.FC<TNameTask> = ({ name, children }) => {
	return (
		<div className={styles.task}>
			{name} {children}
		</div>
	);
};

export default Task;
