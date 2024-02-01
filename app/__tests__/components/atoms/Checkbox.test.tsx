import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "@/app/components/atoms/Checkbox";

describe("Checkbox Component", () => {
  test("renders the checkbox with the correct label and initial state", () => {
    render(
      <Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />
    );
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Test Checkbox");

    expect(checkbox).not.toBeChecked();
    expect(label).toBeInTheDocument();
  });

  test("toggles checkbox state on click and calls onChange", () => {
    const mockOnChange = jest.fn();
    render(
      <Checkbox label="Test Checkbox" checked={false} onChange={mockOnChange} />
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("changes opacity class based on checked state", () => {
    const { rerender } = render(
      <Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />
    );
    let opacitySpan = screen.getByTestId("opacity-span");
    expect(opacitySpan).toHaveClass("opacity-0");

    rerender(
      <Checkbox label="Test Checkbox" checked={true} onChange={() => {}} />
    );
    opacitySpan = screen.getByTestId("opacity-span");
    expect(opacitySpan).toHaveClass("opacity-100");
  });
});
