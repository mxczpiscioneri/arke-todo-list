import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "@/app/components/molecules/TaskItem";

describe("TaskItem Component", () => {
  const mockToggleCompleted = jest.fn();
  const mockRemove = jest.fn();
  const mockUpdateTaskName = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders TaskItem with name and checkbox correctly", () => {
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
        onUpdateTaskName={mockUpdateTaskName}
      />
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("calls onToggleCompleted when checkbox is clicked", () => {
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
        onUpdateTaskName={mockUpdateTaskName}
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockToggleCompleted).toHaveBeenCalledWith(1);
  });

  test("enters edit mode and updates task name on blur", () => {
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
        onUpdateTaskName={mockUpdateTaskName}
      />
    );

    fireEvent.click(screen.getByText("Test Task"));
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Updated Task" },
    });
    fireEvent.blur(screen.getByRole("textbox"));

    expect(mockUpdateTaskName).toHaveBeenCalledWith(1, "Updated Task");
  });

  test("enters edit mode and updates task name on enter key press", () => {
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
        onUpdateTaskName={mockUpdateTaskName}
      />
    );

    fireEvent.click(screen.getByText("Test Task"));
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Updated Task" },
    });
    fireEvent.keyDown(screen.getByRole("textbox"), {
      key: "Enter",
      code: "Enter",
    });

    expect(mockUpdateTaskName).toHaveBeenCalledWith(1, "Updated Task");
  });

  test("calls onRemove with delay when remove button is clicked", () => {
    jest.useFakeTimers();
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
        onUpdateTaskName={mockUpdateTaskName}
      />
    );
    fireEvent.click(screen.getByText(/remove/i));
    jest.advanceTimersByTime(500);

    expect(mockRemove).toHaveBeenCalledWith(1);
    jest.useRealTimers();
  });
});
