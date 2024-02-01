import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "@/app/components/molecules/TaskItem";

describe("TaskItem Component", () => {
  const mockToggleCompleted = jest.fn();
  const mockRemove = jest.fn();

  test("renders TaskItem with name and checkbox correctly", () => {
    render(
      <TaskItem
        id={1}
        name="Test Task"
        completed={false}
        onToggleCompleted={mockToggleCompleted}
        onRemove={mockRemove}
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
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockToggleCompleted).toHaveBeenCalledWith(1);
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
      />
    );
    fireEvent.click(screen.getByText(/remove/i));
    jest.advanceTimersByTime(500);

    expect(mockRemove).toHaveBeenCalledWith(1);
    jest.useRealTimers();
  });
});
