import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/app/components/organisms/Header";

describe("Header Component", () => {
  test("renders correctly and displays the right title", () => {
    render(<Header />);

    expect(screen.getByText("My Task List")).toBeInTheDocument();

    const titleElement = screen.getByRole("heading", { name: "My Task List" });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });
});
