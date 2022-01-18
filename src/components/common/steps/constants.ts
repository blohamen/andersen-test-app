export enum StepsIds {
  email = 'email',
  age = 'age',
  summary = 'summary',
  names = 'names',
}

export interface StepData {
  [dataType: string]: string | number;
}
