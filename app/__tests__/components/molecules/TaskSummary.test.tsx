import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskSummary from "@/app/components/molecules/TaskSummary";

describe("TaskSummary Component", () => {
  test("renders task summary correctly with no tasks", () => {
    render(
      <TaskSummary
        completedTasks={0}
        totalTasks={0}
        removeAllTasks={() => {}}
      />
    );

    expect(screen.getByText("0 of 0 tasks")).toBeInTheDocument();
    expect(screen.queryByTestId("delete-all-task")).not.toBeInTheDocument();
  });

  test("renders task summary correctly with tasks and shows button", () => {
    render(
      <TaskSummary
        completedTasks={2}
        totalTasks={5}
        removeAllTasks={() => {}}
      />
    );

    expect(screen.getByText("2 of 5 tasks")).toBeInTheDocument();
    expect(screen.getByTestId("delete-all-task")).toBeInTheDocument();
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
