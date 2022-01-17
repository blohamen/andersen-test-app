import React, { useState } from 'react';

import { InsuranceIds, INSURANCES_CONFIG } from './constants';
import { StepData } from '../common/steps';

interface BuyFlowProps {
  insuranceType: InsuranceIds;
}

export const BuyFlow: React.FC<BuyFlowProps> = ({ insuranceType }) => {
  const currentInsuranceConfig = INSURANCES_CONFIG[insuranceType];
  const currentInsuranceSteps = currentInsuranceConfig.steps;
  const [collectedData, updateData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const Step = currentInsuranceSteps[currentStepIndex].step;

  const handleChangeStepData = (stepData: StepData) => {
    const nextStepIndex = currentStepIndex + 1;
    updateData((prevState) => ({ ...prevState, ...stepData }));
    setCurrentStepIndex(nextStepIndex);
  };

  return (
    <>
      <h4>Buying {currentInsuranceConfig.name}</h4>
      <Step
        insuranceType={insuranceType}
        collectedData={collectedData}
        cb={handleChangeStepData}
      />
    </>
  );
};
