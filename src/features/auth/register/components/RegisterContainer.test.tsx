import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { RegisterContainer } from "./RegisterContainer";

describe("RegisterContainer", () => {
  it("renders childrens correctly", () => {
    render(
      <RegisterContainer>
        <div>test</div>
      </RegisterContainer>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
