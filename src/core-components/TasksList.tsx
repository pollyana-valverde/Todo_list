import React from "react";
import { Button } from "../components/Button";
import { TaskItem } from "./TaskItem";

export function TasksList() {
  return (
    <React.Fragment>
      <section>
        <Button icon="plus" className="w-full">Nova tarefa</Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </React.Fragment>
  );
}
