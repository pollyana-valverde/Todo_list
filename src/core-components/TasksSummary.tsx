import React from "react";
import { Badge } from "../components/Badge";
import { Text } from "../components/Text";
import { useTasks } from "../hooks";

export function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <React.Fragment>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" isLoading={isLoadingTasks}>
          {createdTasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Concluídas
        </Text>
        <Badge variant="primary" isLoading={isLoadingTasks}>
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </React.Fragment>
  );
}
