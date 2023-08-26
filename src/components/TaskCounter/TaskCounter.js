import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { getTasks } from "redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const tasksCount = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        // acc.active = acc.active + 1;
        acc.active += 1;
      } else {
        acc.completed += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
