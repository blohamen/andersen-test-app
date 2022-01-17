import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmailStep } from './EmailStep';

const mockCallback = jest.fn();

test('should render EmailStep correctly', () => {
  render(<EmailStep cb={mockCallback} />);
  const textElement = screen.getByText(/Email/i);
  expect(textElement).toBeInTheDocument();
});
