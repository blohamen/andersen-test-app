import { render, screen } from '@testing-library/react';
import { AgeStep } from './AgeStep';
import React from 'react';

const mockCallback = jest.fn();

test('should render AgeStep correctly', () => {
  render(<AgeStep cb={mockCallback} />);
  const textElement = screen.getByText(/Age/i);
  expect(textElement).toBeInTheDocument();
});
