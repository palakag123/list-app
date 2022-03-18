import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Random from "./Random";
describe("counter", () => {
  test("renders Counter Random title", () => {
    render(<Random />);
    const titleElement = screen.getByText(/Counter Random/);
    expect(titleElement).toBeInTheDocument();
  });
  test("increment button is clicked and the value increments by 1", () => {
    render(<Random />);
    const displayValue = screen.getByTitle("Display");
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(displayValue.textContent).toBe("2");
  });

  test("decrement button is clicked and the value decrements by 1", () => {
    render(<Random />);
    const displayValue = screen.getByTitle("Display");
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(displayValue.textContent).toBe("0");
  });
});
