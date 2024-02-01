import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/app/components/atoms/Input";

describe("Input Component", () => {
  test("renders input and displays the correct placeholder and value", () => {
    const placeholderText = "Enter text";
    const inputValue = "Test";

    render(
      <Input
        placeholder={placeholderText}
        value={inputValue}
        onChange={() => {}}
        className="test-class"
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(inputValue);
    expect(inputElement).toHaveClass("input test-class");
  });

  test("calls onChange when the input is changed", () => {
    const handleChange = jest.fn();
    const placeholderText = "Enter text";

    render(
      <Input
        placeholder={placeholderText}
        value=""
        onChange={handleChange}
        className="test-class"
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
