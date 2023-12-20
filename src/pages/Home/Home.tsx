import React from 'react';
import { Container, Box } from './Home.styles.ts';
import { Button } from '../../components/Button/Button.tsx';
import { Input } from '../../components/Input/Input.tsx';

export const Home = () => {
  const [cell, setCell] = React.useState<null | string>(null);

  return (
    <Container>
      <Box>
        <h1>Abrir nova conversa</h1>
        <Input value={cell} setValue={setCell} />
        <Button number={cell} />
      </Box>
    </Container>
  );
};
