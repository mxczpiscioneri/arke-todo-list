import React from "react";
import TaskItem from "../molecules/TaskItem";
import { TaskList } from "@/app/types/task";

const TaskList: React.FC<TaskList> = ({
  tasks,
  onToggleCompleted,
  onRemoveTask,
}) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          onToggleCompleted={onToggleCompleted}
          onRemove={onRemoveTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
