import css from "./StatusFilter.module.css";
import { Button } from "components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  const { all, active, completed } = statusFilters;

  return (
    <div className={css.wrapper}>
      <Button selected={filter === all} onClick={() => handleFilterChange(all)}>
        All
      </Button>
      <Button
        selected={filter === active}
        onClick={() => handleFilterChange(active)}
      >
        Active
      </Button>
      <Button
        selected={filter === completed}
        onClick={() => handleFilterChange(completed)}
      >
        Completed
      </Button>
    </div>
  );
};
