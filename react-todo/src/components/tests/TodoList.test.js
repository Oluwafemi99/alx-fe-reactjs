import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
	test("renders initial todos", () => {
		render(<TodoList />);

		expect(screen.getByText("Learn React")).toBeInTheDocument();
		expect(screen.getByText("Write Tests")).toBeInTheDocument();
		expect(screen.getByText("Build Projects")).toBeInTheDocument();
	});

	test("adds a new todo", () => {
		render(<TodoList />);

		const input = screen.getByTestId("todo-input");
		const button = screen.getByText("Add");

		fireEvent.change(input, { target: { value: "New Task" } });
		fireEvent.click(button);

		expect(screen.getByText("New Task")).toBeInTheDocument();
	});

	test("toggles a todo", () => {
		render(<TodoList />);

		const todo = screen.getByText("Learn React");

		fireEvent.click(todo);

		expect(todo).toHaveStyle("text-decoration: line-through");
	});

	test("deletes a todo", () => {
		render(<TodoList />);

		const todo = screen.getByText("Write Tests");
		const deleteButton = screen.getAllByText("Delete")[1];

		fireEvent.click(deleteButton);

		expect(todo).not.toBeInTheDocument();
	});
});
