import React from 'react';
import { Container } from './Input.styles.ts';
import { UseThemeContext } from '../../global/ThemeContext.tsx';

type InputProps = {
  value: null | string;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Input = ({ value, setValue }: InputProps) => {
  const { darkTheme } = UseThemeContext();

  return (
    <Container
      theme={darkTheme}
      placeholder='Digite o número aqui'
      type='text'
      value={value || ''}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};
