import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectTaskCount } from "redux/selectors";

export const TaskCounter = () => {
  const tasksCount = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
