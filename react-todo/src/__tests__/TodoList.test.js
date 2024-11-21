import React from 'react';  // Ensure React is imported
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Initially not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete', { selector: 'button' });

    // Delete the first todo
    fireEvent.click(deleteButton[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});