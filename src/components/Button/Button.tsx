import React from 'react';
import { Container } from './Button.styles.ts';
import { UseThemeContext } from '../../global/ThemeContext.tsx';

type ButtonProps = {
  number: string | null;
};

export const Button = ({ number }: ButtonProps) => {
  const { darkTheme } = UseThemeContext();

  function openChat(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cell: string | null
  ) {
    window.open(`https://wa.me/55${cell}`);
  }

  return (
    <Container theme={darkTheme} onClick={(e) => openChat(e, number)}>
      Conversar
    </Container>
  );
};
