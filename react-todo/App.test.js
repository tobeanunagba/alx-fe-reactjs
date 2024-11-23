import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test("renders learn react", () => {
  render(<App />);
  const elements = screen.getAllByText(/learn react/i); // Returns an array of matching elements
  expect(elements.length).toBeGreaterThan(0); // Ensure at least one matching element exists
  expect(elements[0]).toBeInTheDocument(); // Check the first element specifically
});
