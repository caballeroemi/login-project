
// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("<App />", () => {
  it("should render the login page", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    // Act
    const title = screen.getByRole("heading", {
      name: "Login",
    });

    // Assert
    expect(title).toBeInTheDocument();
  });
});
