import React from 'react';
import { Container } from './Input.styles.ts';
import { UseThemeContext } from '../../Global/ThemeContext.tsx';
import applyPhoneMask from '../../utils/applyPhoneMask.ts';

type InputProps = {
  value: null | string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ value, setValue }: InputProps) => {
  const { darkTheme } = UseThemeContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(applyPhoneMask(e.currentTarget.value));
  }

  return (
    <Container
      theme={darkTheme}
      placeholder='(XX) X XXXX-XXXX'
      type='text'
      value={value || ''}
      onChange={handleChange}
      maxLength={15}
    />
  );
};
