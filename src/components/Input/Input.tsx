import React from 'react';
import { Container } from './Input.styles.ts';

type InputProps = {
  value: null | string;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Input = ({ value, setValue }: InputProps) => {
  return (
    <Container
      placeholder='Digite o número aqui'
      type='text'
      value={value || ''}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};
