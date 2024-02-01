import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "@/app/components/templates/MainLayout";

describe("MainLayout Component", () => {
  test("renders Header, Footer, and children content correctly", () => {
    const childrenContent = "Child Component Content";
    render(
      <MainLayout>
        <div>{childrenContent}</div>
      </MainLayout>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();

    expect(screen.getByText(childrenContent)).toBeInTheDocument();

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
