export const getTasks = (state) => state.tasks;

export const getTasksItems = (state) => state.tasks.items;

export const getIsLoading = (state) => state.tasks.isLoading;

export const getError = (state) => state.tasks.error;

export const getStatusFilter = (state) => state.filters.status;

const tasksInitialStateItems = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasks = {
  items: tasksInitialStateItems,
  isLoading: false,
  error: null,
};

console.log(JSON.stringify(tasks));
