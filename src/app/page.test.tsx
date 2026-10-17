import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "./page";

describe("HomePage Component", () => {
  it("renders the primary brand headline", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /we build software for real-world problems\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the primary CTA buttons", () => {
    render(<HomePage />);
    expect(
      screen.getAllByRole("link", { name: /start a project/i }).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("link", { name: /explore capabilities/i })
    ).toBeInTheDocument();
  });

  it("renders core capability section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /disciplined engineering for complex systems\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders selected work section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /built with a purpose\./i })
    ).toBeInTheDocument();
  });
});
