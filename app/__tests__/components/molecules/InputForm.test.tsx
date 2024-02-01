import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputForm from "@/app/components/molecules/InputForm";

describe("InputForm Component", () => {
  test("renders input form", () => {
    render(<InputForm onAddTask={() => {}} />);
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add task/i })
    ).toBeInTheDocument();
  });

  test("allows typing in the input", () => {
    render(<InputForm onAddTask={() => {}} />);
    const inputElement = screen.getByPlaceholderText(
      "Add a new task"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    expect(inputElement.value).toBe("New Task");
  });

  test("calls onAddTask with input value and clears the input on form submission", () => {
    const mockOnAddTask = jest.fn();
    render(<InputForm onAddTask={mockOnAddTask} />);
    const inputElement = screen.getByPlaceholderText(
      "Add a new task"
    ) as HTMLInputElement;
    const formElement = screen.getByTestId("input-form");

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.submit(formElement);

    expect(mockOnAddTask).toHaveBeenCalledWith("New Task");

    expect(inputElement.value).toBe("");
  });
});
