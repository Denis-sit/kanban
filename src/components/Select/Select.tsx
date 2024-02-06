import { IIssues } from "../../TypeData";
import { v4 as uuid } from "uuid";

type TOptions = {
  issues: IIssues[];
};

export default function Select({ issues }: TOptions): JSX.Element {
  console.log(issues, "select");

  return (
    <select name="select">
      {issues.map((options) => (
        <option key={uuid()}>{options.name}</option>
      ))}
    </select>
  );
}
