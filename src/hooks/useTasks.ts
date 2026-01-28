/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

import { delay } from "../utils/delay";

import { type Task, TaskState, TASKS_KEY } from "../models/task";

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  const createdTasksCount = tasks.filter(
    (taskItem) => taskItem.state === TaskState.Created,
  ).length;

  const concludedTasksCount = tasks.filter((task) => task.concluded).length;

  return {
    tasks,
    createdTasksCount,
    concludedTasksCount,
    isLoadingTasks,
  };
}
