import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const tasksInitialStateItems = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

console.log(JSON.stringify(tasksInitialStateItems));

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleCompleted(state, action) {
      // return state.map((task) => {
      //   if (task.id !== action.payload) {
      //     return task;
      //   }
      //   return { ...task, completed: !task.completed };
      // });
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
