import { IIssues } from "../../TypeData";

type TOptions = {
  filteredData: IIssues[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  filteredData,
  onChange,
}: TOptions): JSX.Element {
  console.log(filteredData, "select");

  return (
    <select name="select" onChange={onChange}>
      <option key={1}>Выберете задачу из списка</option>
      {filteredData.map((options, i) => (
        <option key={filteredData[i].id}>{options.name}</option>
      ))}
    </select>
  );
}
