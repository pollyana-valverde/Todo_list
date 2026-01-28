import useLocalStorage from "use-local-storage";

import { type Task, TASKS_KEY } from "../models/task";

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  const tasksCount = tasks.length;

  const concludedTasksCount = tasks.filter((task) => task.concluded).length;

  return {
    tasks,
    tasksCount,
    concludedTasksCount,
  };
}
