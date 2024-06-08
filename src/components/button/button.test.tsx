import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Component ➡️ Button", () => {
  test("Button succesfully displayed with the text", () => {
    render(<Button text="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  test("onClick handler called when clicked", () => {
    const handleClick = vitest.fn();
    render(<Button text="Hello world" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Hello world"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("isDisabled prop is disabling the button", () => {
    render(<Button text="Hello world" isDisabled />);
    expect(screen.getByText("Hello world")).toBeDisabled();
  });

  test("has rounded style when rounded is true", () => {
    render(<Button text="Hello world" rounded />);
    const button = screen.getByText("Hello world");
    expect(button).toHaveClass("rounded-full");
  });
});
