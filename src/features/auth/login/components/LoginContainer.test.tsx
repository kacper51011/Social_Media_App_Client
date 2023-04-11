import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { LoginContainer } from "./LoginContainer";

describe("LoginContainer", () => {
  it("renders childrens correctly", () => {
    render(
      <LoginContainer>
        <div>test</div>
      </LoginContainer>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
