import useLocalStorage from "use-local-storage";

import { type Task, TaskState, TASKS_KEY } from "../models/task";

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  const createdTasksCount = tasks.filter(
    (taskItem) => taskItem.state === TaskState.Created,
  ).length;

  const concludedTasksCount = tasks.filter((task) => task.concluded).length;

  return {
    tasks,
    createdTasksCount,
    concludedTasksCount,
  };
}
