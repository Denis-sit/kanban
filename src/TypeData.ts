export interface IIssues {
  id: number;
  name: string;
  description: string;
}

export interface IStatusItem {
  title: string;
  issues: IIssues[];
}

export default interface IData {
  [index: number]: IStatusItem;
}
