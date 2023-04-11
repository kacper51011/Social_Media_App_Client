import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";
import { describe, it } from "vitest";

describe("Greeting", () => {
  it("renders correctly", () => {
    render(<Greeting />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
