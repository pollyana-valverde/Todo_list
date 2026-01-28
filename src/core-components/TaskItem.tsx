import React, { useState } from "react";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";
import { InputText } from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const { updateTask } = useTask();

  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );
  const [taskTitle, setTaskTitle] = useState(task?.title || "");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
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

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>

          <div className="flex gap-1">
            <ButtonIcon icon="trash" variant="tertiary" />
            <ButtonIcon
              icon="pencil-simple"
              variant="tertiary"
              onClick={handleEditTask}
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
