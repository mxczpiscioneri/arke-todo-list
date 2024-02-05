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
  onUpdateTaskName,
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  const handleRemoveClick = () => {
    setIsExiting(true);
    setTimeout(() => onRemove(id), 500);
  };

  const handleSaveEdit = () => {
    onUpdateTaskName(id, tempName);
    setIsEditing(false);
  };

  return (
    <li data-testid="task-item" className="fadeInLeft">
      <div
        className={`flex items-center justify-between gap-2 p-2 rounded border-b border-blue-chill-100 hover:bg-blue-chill-100 ${
          isExiting ? "fadeOutRight" : ""
        }`}
      >
        <div className="flex flex-1 items-center">
          <Checkbox
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          {isEditing ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
              autoFocus
              className="ml-2 flex-1"
            />
          ) : (
            <span
              onClick={() => setIsEditing(true)}
              className={`ml-2 cursor-pointer flex-1 ${
                completed ? "line-through text-gray-400" : ""
              }`}
            >
              {name}
            </span>
          )}
        </div>
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
