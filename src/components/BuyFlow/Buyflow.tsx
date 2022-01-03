import React, { useState } from 'react';

import { InsuranceIds, INSURANCES_CONFIG, INSURANCE_STEPS } from './constants';

interface BuyFlowProps {
  insuranceType: InsuranceIds;
}

export const BuyFlow: React.FC<BuyFlowProps> = ({ insuranceType }) => {
  const currentInsuranceConfig = INSURANCES_CONFIG[insuranceType];
  const currentInsuranceSteps = currentInsuranceConfig.steps;
  const [currentStep, setStep] = useState(currentInsuranceSteps[0]);
  const [collectedData, updateData] = useState({});

  const getStepCallback = (nextStep: INSURANCE_STEPS) => (stepData: object) => {
    updateData({ ...collectedData, ...stepData });
    setStep(nextStep);
  };

  const getCurrentStep = () => {
    const currentStepIndex = currentInsuranceSteps.indexOf(currentStep);
    const nextStep = currentInsuranceSteps[currentStepIndex + 1];
    const Step = currentStep.step;

    return (
      <Step
        insuranceType={insuranceType}
        collectedData={collectedData}
        cb={getStepCallback(nextStep)}
      />
    );
  };
  return (
    <>
      <h4>Buying {currentInsuranceConfig.name}</h4>
      {getCurrentStep()}
    </>
  );
};
