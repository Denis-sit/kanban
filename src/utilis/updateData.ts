import { IIssues, IStatusItem, IData } from '../TypeData';
import { Action } from '../utilis/enum';

export function updateData(
	bordTitle: string,
	value: IIssues,
	flag: string,
	data: IData,
) {
	const updatedData = data.map((item: IStatusItem) => {
		if (item.title === bordTitle && flag === Action.edit) {
			let issues = item.issues.map((obj) => {
				if (obj.id === value.id) {
					return value;
				} else {
					return obj;
				}
			});
			return { ...item, issues: issues };
		} else if (item.title === bordTitle && flag === Action.delete) {
			const tasks = item.issues.filter((item: IIssues) => item.id !== value.id);
			return { ...item, issues: tasks };
		} else if (
			item.title === bordTitle &&
			(flag === Action.add || flag === Action.next)
		) {
			return { ...item, issues: [...item.issues, value] };
		} else {
			return {
				...item,
				issues: item.issues.filter((task: IIssues) => task.id !== value.id),
			};
		}
	});

	return updatedData;
}
