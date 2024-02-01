"use client";

import React from "react";
import MainLayout from "./components/templates/MainLayout";
import TaskList from "./components/organisms/TaskList";
import InputForm from "./components/molecules/InputForm";
import { useTasks } from "./hooks/useTasks";

function Home() {
  const { tasks, addTask, toggleTaskCompletion, removeTask } = useTasks();

  return (
    <MainLayout>
      <h1>Welcome to the To-Do List App!</h1>
      <InputForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleTaskCompletion}
        onRemoveTask={removeTask}
      />
    </MainLayout>
  );
}

export default Home;
