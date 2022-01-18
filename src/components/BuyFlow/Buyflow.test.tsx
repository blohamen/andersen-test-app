import React from 'react';
import { render, screen } from '@testing-library/react';
import { BuyFlow } from './Buyflow';
import { InsuranceIds } from './constants';

describe('Buyflow', () => {
  test('should render Buyflow correctly with first step', () => {
    render(<BuyFlow insuranceType={InsuranceIds.devIns} />);
    const textElement = screen.getByText(/Email/i);
    expect(textElement).toBeInTheDocument();
  });
});
