import React, { useState } from 'react';

interface AgeStepProps {
  cb: (data: object) => void;
}

export const AgeStep: React.FC<AgeStepProps> = ({ cb }) => {
  const [age, setAge] = useState(0);
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setAge(Number(value));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cb({ age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Age:{' '}
        <input type="number" required onChange={handleChange} value={age} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
