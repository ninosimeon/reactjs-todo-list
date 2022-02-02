import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

const propsMock = {
  handleSubmit: jest.fn(),
};

describe("components / TodoForm", () => {
  test("verify 'todo__form' exists", () => {
    render(<TodoForm {...propsMock} />);

    expect(screen.getByTestId("todo__form")).toBeDefined();
  });

  test("verify 'todo__form' submits once entering content and clicking ADD", () => {
    render(<TodoForm {...propsMock} />);
    const input = screen.getByTestId("todo__item");
    const addButton = screen.getByTestId("todo__add");

    fireEvent.change(input, { target: { value: "Hello world!" } });
    fireEvent(
      addButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(propsMock.handleSubmit).toHaveBeenCalled();
  });
});
