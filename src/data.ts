import { IData } from "./TypeData";
import { v4 as uuid } from "uuid";

const data: IData = [
  {
    title: "Backlog",
    issues: [
      {
        id: uuid(),
        name: "Sprint bugfix Backlog",
        description: "Fix all the bugs",
      },
      {
        id: uuid(),
        name: "Sprint bugfix Backlog2",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "Ready",
    issues: [
      {
        id: uuid(),
        name: "Sprint bugfix Ready",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "In Progress",
    issues: [
      {
        id: uuid(),
        name: "Sprint bugfix In Progress",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "Finished",
    issues: [
      {
        id: uuid(),
        name: "Sprint bugfix Finished",
        description: "Fix all the bugs",
      },
    ],
  },
];

export default data;
