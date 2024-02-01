import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "@/app/components/organisms/TaskList";

describe("TaskList Component", () => {
  const mockTasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ];
  const mockToggleCompleted = jest.fn();
  const mockRemoveTask = jest.fn();

  test("renders the correct number of tasks", () => {
    render(
      <TaskList
        tasks={mockTasks}
        onToggleCompleted={mockToggleCompleted}
        onRemoveTask={mockRemoveTask}
      />
    );

    const taskItems = screen.getAllByTestId("task-item");
    expect(taskItems.length).toBe(mockTasks.length);
  });
});
