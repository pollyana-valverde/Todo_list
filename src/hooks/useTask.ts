import useLocalStorage from "use-local-storage";

import { type Task, TaskState, TASKS_KEY } from "../models/task";

export function useTask() {
  const [task, setTask] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTask(
      task.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, state: TaskState.Created, ...payload }
          : taskItem,
      ),
    );
  }

  return {
    prepareTask,
    updateTask,
  };
}
