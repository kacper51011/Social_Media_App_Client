import { render, screen } from "@testing-library/react";
import { ErrorText } from "./ErrorText";
import { describe, it } from "vitest";

describe("ErrorText works correctly", () => {
  it("renders ErrorText and displays text correctly", () => {
    render(<ErrorText errorMessage={"test"} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("dont show the spaceholder text", () => {
    render(<ErrorText errorMessage={undefined} />);
    expect(screen.getByText("spaceholder for errors")).not.toBeVisible();
  });
});
