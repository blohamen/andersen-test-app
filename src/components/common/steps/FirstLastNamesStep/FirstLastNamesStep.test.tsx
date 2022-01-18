import React from 'react';
import { render, screen } from '@testing-library/react';
import { FirstLastNamesStep } from './FirstLastNamesStep';

const mockCallback = jest.fn();

test('should render FirstLastNamesStep correctly', () => {
  render(<FirstLastNamesStep cb={mockCallback} />);
  const firstNameElement = screen.getByText(/First name/i);
  const lastNameElement = screen.getByText(/Last name/i);
  expect(firstNameElement).toBeInTheDocument();
  expect(lastNameElement).toBeInTheDocument();
});
