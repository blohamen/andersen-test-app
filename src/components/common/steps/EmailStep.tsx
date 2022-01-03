import React, { useState } from 'react';

interface EmailStepProps {
  cb: (data: object) => void;
}

export const EmailStep: React.FC<EmailStepProps> = ({ cb }) => {
  const [email, setEmail] = useState('');
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setEmail(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cb({ email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Email:{' '}
        <input type="email" required onChange={handleChange} value={email} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
