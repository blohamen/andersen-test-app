import React, { useState } from 'react';

import { StepData } from '../constants';

interface FirstLastNamesStepProps {
  cb: (data: StepData) => void;
}

export const FirstLastNamesStep: React.FC<FirstLastNamesStepProps> = ({
  cb,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(value);
  };

  const handleLastNameChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cb({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        First Name:{' '}
        <input
          name="firstName"
          type="text"
          required
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </div>
      <div>
        Last Name:{' '}
        <input
          name="lastName"
          type="text"
          required
          onChange={handleLastNameChange}
          value={lastName}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
