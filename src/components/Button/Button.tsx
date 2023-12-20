import React from 'react';
import { Container } from './Button.styles.ts';

type ButtonProps = {
  number: string | null;
};

function openChat(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  cell: string | null
) {
  window.open(`https://wa.me/55${cell}`);
}

export const Button = ({ number }: ButtonProps) => {
  return <Container onClick={(e) => openChat(e, number)}>Conversar</Container>;
};
