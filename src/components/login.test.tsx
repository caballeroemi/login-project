
// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Login from "./Login";

describe("<Login />", () => {

  it("should render the Name input", () => {
    render(<Login onNext={() => {}} />);

    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    });

    expect(nameInput).toBeInTheDocument();
  });

  it("should render the Second Name input", () => {
    render(<Login onNext={() => {}} />);

    const secondNameInput = screen.getByRole("textbox", {
      name: "Second Name",
    });

    expect(secondNameInput).toBeInTheDocument();
  });

  it("should render the Country input", () => {
    render(<Login onNext={() => {}} />);

    const countryInput = screen.getByRole("textbox", {
      name: "Country",
    });

    expect(countryInput).toBeInTheDocument();
  });

  it("should render the Age input", () => {
    render(<Login onNext={() => {}} />);

    const ageInput = screen.getByRole("spinbutton", {
      name: "Age",
    });

    expect(ageInput).toBeInTheDocument();
  });

});
