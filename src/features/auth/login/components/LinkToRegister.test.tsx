import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { LinkToRegister } from "./LinkToRegister";
import { BrowserRouter } from "react-router-dom";

describe("Register Link", () => {
  it("renders correctly", () => {
    render(<LinkToRegister />, { wrapper: BrowserRouter });
    expect(
      screen.getByText("You don`t have account yet? Click here!")
    ).toBeInTheDocument();
  });
});
