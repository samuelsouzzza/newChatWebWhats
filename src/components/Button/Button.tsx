import React from 'react';
import { Container } from './Button.styles.ts';
import { UseThemeContext } from '../../Global/ThemeContext.tsx';

type ButtonProps = {
  number: string | null;
};

export const Button = ({ number }: ButtonProps) => {
  const { darkTheme } = UseThemeContext();

  function openChat(cell: string | null) {
    window.open(`https://wa.me/55${cell?.replace(/\D/g, '')}`);
  }

  return (
    <Container
      theme={darkTheme}
      onClick={() => openChat(number)}
      disabled={!number ? true : false}
    >
      Conversar
    </Container>
  );
};
