import React, { useState } from 'react';

interface FirstLastNamesStepProps {
  cb: (data: object) => void;
}

export const FirstLastNamesStep: React.FC<FirstLastNamesStepProps> = ({
  cb,
}) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (field: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cb(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        First Name:{' '}
        <input
          name="firstName"
          type="text"
          required
          onChange={handleChange('firstName')}
          value={data.firstName}
        />
      </div>
      <div>
        Last Name:{' '}
        <input
          name="lastName"
          type="text"
          required
          onChange={handleChange('lastName')}
          value={data.lastName}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
