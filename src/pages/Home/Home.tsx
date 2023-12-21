import React from 'react';
import { Container, Box, Title } from './Home.styles.ts';
import { Button } from '../../components/Button/Button.tsx';
import { Input } from '../../components/Input/Input.tsx';
import { BarOptions } from '../../components/BarOptions/BarOptions.tsx';
import { UseThemeContext } from '../../Global/ThemeContext.tsx';

export const Home = () => {
  const { theme } = UseThemeContext();
  const [cell, setCell] = React.useState<null | string>(null);

  return (
    <Container theme={theme}>
      <Box>
        <BarOptions />
        <Title>Abrir nova conversa</Title>
        <Input value={cell} setValue={setCell} />
        <Button number={cell} />
      </Box>
    </Container>
  );
};
