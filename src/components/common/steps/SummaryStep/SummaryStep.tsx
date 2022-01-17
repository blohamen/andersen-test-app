import React from 'react';
import { Link } from 'react-router-dom';

import { InsuranceIds } from '../../../BuyFlow';
import { StepData } from '../constants';

interface SummaryStepProps {
  collectedData: StepData;
  insuranceType: InsuranceIds;
}

export const SummaryStep: React.FC<SummaryStepProps> = ({
  collectedData,
  insuranceType,
}) => {
  return (
    <>
      {Object.entries(collectedData).map(([name, value], index) => (
        <div key={index}>
          {name}: {value}
        </div>
      ))}
      <div>
        <Link to={`/purchased=${insuranceType}`}>Purchase</Link>
      </div>
    </>
  );
};
