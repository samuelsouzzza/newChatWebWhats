import React from 'react';
import { Container, Box, Title } from './Home.styles.ts';
import { Button } from '../../components/Button/Button.tsx';
import { Input } from '../../components/Input/Input.tsx';
import { BarOptions } from '../../components/BarOptions/BarOptions.tsx';
import { UseThemeContext } from '../../Global/ThemeContext.tsx';

export const Home = () => {
  const { darkTheme } = UseThemeContext();

  const [cell, setCell] = React.useState<string>('');

  return (
    <Container theme={darkTheme}>
      <Box theme={darkTheme}>
        <BarOptions />
        <Title theme={darkTheme}>Abrir nova conversa</Title>{' '}
        <p>
          Inicie uma conversa com alguém que você não possui o contato salvo no
          WhatsApp.
        </p>
        <Input value={cell} setValue={setCell} />
        <Button number={cell} />
      </Box>
    </Container>
  );
};
