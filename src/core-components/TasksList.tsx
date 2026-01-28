import React from "react";
import { useTasks, useTask } from "../hooks";

import { Button } from "../components/Button";
import { TaskItem } from "./TaskItem";
import { type Task, TaskState } from "../models/task";

export function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <React.Fragment>
      <section>
        <Button
          icon="plus"
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} isLoading />
            <TaskItem task={{} as Task} isLoading />
            <TaskItem task={{} as Task} isLoading />
          </>
        )}
      </section>
    </React.Fragment>
  );
}
