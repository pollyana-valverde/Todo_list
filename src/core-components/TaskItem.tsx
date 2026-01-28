import React, { useState } from "react";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";
import { InputText } from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks";
import { Skeleton } from "../components/Skeleton";

interface TaskItemProps {
  task: Task;
  isLoading?: boolean;
}

export function TaskItem({ task, isLoading }: TaskItemProps) {
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );
  const [taskTitle, setTaskTitle] = useState(task?.title || "");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;

    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
            isLoading={isLoading}
          />

          {!isLoading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}

          <div className="flex gap-1">
            <ButtonIcon
              icon="trash"
              variant="tertiary"
              onClick={handleDeleteTask}
              isLoading={isLoading}
            />
            <ButtonIcon
              icon="pencil-simple"
              variant="tertiary"
              onClick={handleEditTask}
              isLoading={isLoading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            required
            autoFocus
            value={taskTitle}
            onChange={handleChangeTaskTitle}
          />

          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon="x"
              variant="secondary"
              onClick={handleCancelEditTask}
            />
            <ButtonIcon type="submit" icon="check" variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
