import React, { useState } from "react";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";
import { InputText } from "../components/InputText";

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <React.Fragment>
          <InputCheckbox />
          <Text className="flex-1">Fazer compras da semana</Text>

          <div className="flex gap-1">
            <ButtonIcon icon="trash" variant="tertiary" />
            <ButtonIcon
              icon="pencil-simple"
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <InputText className="flex-1" />

          <div className="flex gap-1">
            <ButtonIcon
              icon="x"
              variant="secondary"
              onClick={handleCancelEditTask}
            />
            <ButtonIcon icon="check" variant="primary" />
          </div>
        </React.Fragment>
      )}
    </Card>
  );
}
