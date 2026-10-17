import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./button";
import { SectionLabel } from "./section-label";
import { Input } from "./input";
import { Accordion } from "./accordion";

describe("Base UI Components", () => {
  it("renders Button correctly with different variants", () => {
    render(<Button variant="primary">Submit</Button>);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("renders SectionLabel with formatted index", () => {
    render(<SectionLabel index={1} label="Capabilities" />);
    expect(screen.getByText("[01]")).toBeInTheDocument();
    expect(screen.getByText("Capabilities")).toBeInTheDocument();
  });

  it("renders Input with error state", () => {
    render(<Input placeholder="Email" error />);
    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveClass("border-destructive");
  });

  it("expands Accordion item when clicked", () => {
    const items = [
      {
        id: "faq-1",
        title: "How do you work?",
        content: "Direct engineer-to-client collaboration.",
      },
    ];
    render(<Accordion items={items} />);
    const btn = screen.getByRole("button", { name: /how do you work\?/i });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText("Direct engineer-to-client collaboration.")
    ).toBeVisible();
  });
});
