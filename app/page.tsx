"use client";

import React from "react";
import MainLayout from "./components/templates/MainLayout";
import TaskList from "./components/organisms/TaskList";
import InputForm from "./components/molecules/InputForm";
import { useTasks } from "./hooks/useTasks";
import TaskSummary from "./components/molecules/TaskSummary";

function Home() {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    removeTask,
    removeAllTasks,
    totalTasks,
    completedTasks,
  } = useTasks();

  return (
    <MainLayout>
      <h1>Welcome to the To-Do List App!</h1>
      <InputForm onAddTask={addTask} />
      <TaskSummary
        completedTasks={completedTasks}
        totalTasks={totalTasks}
        removeAllTasks={removeAllTasks}
      />
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleTaskCompletion}
        onRemoveTask={removeTask}
      />
    </MainLayout>
  );
}

export default Home;
