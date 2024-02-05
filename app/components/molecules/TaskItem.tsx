import React, { useState } from "react";
import { TaskItem } from "@/app/types/task";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

const TaskItem: React.FC<TaskItem> = ({
  id,
  name,
  completed,
  onToggleCompleted,
  onRemove,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleRemoveClick = () => {
    setIsExiting(true);
    setTimeout(() => onRemove(id), 500);
  };
  return (
    <li data-testid="task-item" className="fadeInLeft">
      <div
        className={`flex items-center justify-between gap-2 p-2 rounded border-b border-blue-chill-100 hover:bg-blue-chill-100 ${
          isExiting ? "fadeOutRight" : ""
        }`}
      >
        <Checkbox
          checked={completed}
          onChange={() => onToggleCompleted(id)}
          label={name}
        />
        <Button
          data-testid="delete-task"
          onClick={handleRemoveClick}
          className="text-blue-chill-500 hover:text-blue-chill-600"
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
