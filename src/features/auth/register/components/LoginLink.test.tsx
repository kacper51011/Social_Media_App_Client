import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { LoginLink } from "./LoginLink";
import { BrowserRouter } from "react-router-dom";

describe("Login Link", () => {
  it("renders correctly", () => {
    render(<LoginLink />, { wrapper: BrowserRouter });
    expect(
      screen.getByText("Already have account? Click here!")
    ).toBeInTheDocument();
  });
});
