import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/organisms/Footer";

describe("Footer Component", () => {
  test("renders correctly and displays the right text", () => {
    render(<Footer />);

    expect(
      screen.getByText("© 2024 My Task List. All rights reserved.")
    ).toBeInTheDocument();

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
