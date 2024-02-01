import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTasks } from "@/app/hooks/useTasks";
import Home from "@/app/page";

jest.mock("@/app/hooks/useTasks", () => ({
  useTasks: jest.fn(),
}));

describe("Home Page", () => {
  const mockTasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ];

  beforeEach(() => {
    (useTasks as jest.Mock).mockImplementation(() => ({
      tasks: mockTasks,
      addTask: jest.fn(),
      toggleTaskCompletion: jest.fn(),
      removeTask: jest.fn(),
    }));
  });

  test("renders the Home page with MainLayout, InputForm, and TaskList", () => {
    render(<Home />);

    expect(
      screen.getByText("Welcome to the To-Do List App!")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
