"use client";

import { TaskSummaryProps } from "@/app/types/form";
import React from "react";
import Button from "../atoms/Button";

const TaskSummary: React.FC<TaskSummaryProps> = ({
  completedTasks,
  totalTasks,
  removeAllTasks,
}) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <p className="mx-2">
        {completedTasks} of {totalTasks} tasks
      </p>
      <Button
        data-testid="delete-all-task"
        onClick={removeAllTasks}
        className="mx-2 text-blue-chill-800 hover:text-blue-chill-900"
      >
        Remove All
      </Button>
    </div>
  );
};

export default TaskSummary;
