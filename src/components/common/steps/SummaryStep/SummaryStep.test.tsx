import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SummaryStep } from './SummaryStep';
import { InsuranceIds } from '../../../BuyFlow';

const mockCollectedData = {
  name: 'Test name',
  lastName: 'Test last name',
};

test('should render SummaryStep correctly', () => {
  render(
    <MemoryRouter>
      <SummaryStep
        insuranceType={InsuranceIds.devIns}
        collectedData={mockCollectedData}
      />
    </MemoryRouter>
  );
  const textElement = screen.getByText(/lastName/i);
  expect(textElement).toBeInTheDocument();
});
