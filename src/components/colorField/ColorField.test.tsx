import { render, screen, fireEvent } from "@testing-library/react";
import { hexToRgb } from "../../constants/utils";
import "@testing-library/jest-dom";
import ColorField from "./ColorField";

describe("ColorField component", () => {
  test("Button color match the color prop", () => {
    const color = "#ff0000";
    render(<ColorField color={color} onChange={() => {}} />);
    const button = screen.getByRole("button");
    expect(button.style.backgroundColor).toBe(hexToRgb(color));
  });

  test("Open the color palette on click", () => {
    render(<ColorField color="#ff0000" onChange={() => {}} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("palette")).toBeInTheDocument();
  });

  test("Close the palette by clicking outside of it", () => {
    render(<ColorField color="#ff0000" onChange={() => {}} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const palette = screen.getByTestId("palette");
    fireEvent.mouseDown(document);
    expect(palette).not.toBeInTheDocument();
  });

  test("Close the palette by clicking again the button", () => {
    render(<ColorField color="#ff0000" onChange={() => {}} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const palette = screen.getByTestId("palette");
    fireEvent.click(button);
    expect(palette).not.toBeInTheDocument();
  });

  test("Call onChange when a color is selected", () => {
    const handleChange = vitest.fn();
    render(<ColorField color="#ff0000" onChange={handleChange} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // @uiw/react-color-compact library add a title attribute to the palette buttons that is the hex of the color
    const nextColor = "#999999";
    const paletteRandomButton = screen.getByTitle(nextColor);
    fireEvent.click(paletteRandomButton);
    expect(handleChange).toHaveBeenCalledWith(nextColor);
  });
});
