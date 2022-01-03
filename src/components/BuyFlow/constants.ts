import { FC } from 'react';
import {
  AgeStep,
  EmailStep,
  FirstLastNamesStep,
  StepsIds,
  SummaryStep,
} from '../common/steps';

export enum InsuranceIds {
  devIns = 'dev_ins',
  designIns = 'design_ins',
}

export interface INSURANCE_STEPS {
  id: string;
  step: FC<any>;
}

export interface INSURANCE_CONFIG {
  [insuranceType: string]: {
    name: string;
    steps: INSURANCE_STEPS[];
  };
}

export const INSURANCES_CONFIG: INSURANCE_CONFIG = {
  [InsuranceIds.devIns]: {
    name: 'Developer Insurance',
    steps: [
      {
        id: StepsIds.email,
        step: EmailStep,
      },
      {
        id: StepsIds.age,
        step: AgeStep,
      },
      {
        id: StepsIds.summary,
        step: SummaryStep,
      },
    ],
  },
  [InsuranceIds.designIns]: {
    name: 'Designer Insurance',
    steps: [
      {
        id: StepsIds.names,
        step: FirstLastNamesStep,
      },
      {
        id: StepsIds.email,
        step: EmailStep,
      },
      {
        id: StepsIds.age,
        step: AgeStep,
      },
      {
        id: StepsIds.summary,
        step: SummaryStep,
      },
    ],
  },
};
