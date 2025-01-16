import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomButton } from "./practice.jsx";

// "describe" is used to group related tests together
// "it" is used to define individual test cases
//  "expect" is used to create assertions on how the code should behave

describe("CustomButton", () => {
  it("should render a button with the text 'Click Me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
