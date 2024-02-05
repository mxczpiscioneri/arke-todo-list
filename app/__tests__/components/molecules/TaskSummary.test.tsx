import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskSummary from "@/app/components/molecules/TaskSummary";

describe("TaskSummary Component", () => {
  test("renders task summary correctly", () => {
    render(
      <TaskSummary
        completedTasks={2}
        totalTasks={5}
        removeAllTasks={() => {}}
      />
    );

    expect(screen.getByText("2 of 5 tasks")).toBeInTheDocument();
  });

  test("calls removeAllTasks on button click", async () => {
    const removeAllTasksMock = jest.fn();
    render(
      <TaskSummary
        completedTasks={2}
        totalTasks={5}
        removeAllTasks={removeAllTasksMock}
      />
    );

    fireEvent.click(screen.getByTestId("delete-all-task"));

    expect(removeAllTasksMock).toHaveBeenCalledTimes(1);
  });
});
