import { IIssues } from "../../TypeData";
import styles from "./index.module.css";

type TOptions = {
  filteredData: IIssues[];
  selectChange: (option: string) => void;
};

export default function Select({
  filteredData,
  selectChange,
}: TOptions): JSX.Element {
  const handlerSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectChange(e.target.value);
  };

  return (
    <select
      className={styles.select}
      name="select"
      onChange={handlerSelectChange}
    >
      <option key={1}>Выберете задачу из списка</option>
      {filteredData.map((options) => (
        <option key={options.id}>{options.name}</option>
      ))}
    </select>
  );
}
