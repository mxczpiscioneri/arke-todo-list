import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/app/components/atoms/Button";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  test("renders correctly with children", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  test("displays the correct text", () => {
    const buttonText = "Click Me";
    render(<Button onClick={mockOnClick}>{buttonText}</Button>);
    expect(screen.getByRole("button")).toHaveTextContent(buttonText);
  });

  test("calls onClick prop when clicked", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole("button", { name: /click me/i }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom className", () => {
    const customClass = "custom-class";
    render(
      <Button onClick={mockOnClick} className={customClass}>
        Click Me
      </Button>
    );

    expect(screen.getByRole("button", { name: /click me/i })).toHaveClass(
      customClass
    );
  });
});
