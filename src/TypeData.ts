export interface IIssues {
	id: string;
	name: string;
	description?: string;
}

export interface IStatusItem {
	title: string;
	id: string;
	issues: IIssues[];
}

export interface IData extends Array<IStatusItem> {}
