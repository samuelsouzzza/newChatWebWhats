import React from 'react';
import { Container } from './BarOptions.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { UseThemeContext } from '../../global/ThemeContext.tsx';

export const BarOptions = () => {
  const { darkTheme, toggleTheme } = UseThemeContext();

  return (
    <Container theme={darkTheme}>
      {darkTheme ? (
        <FontAwesomeIcon icon={faSun} onClick={toggleTheme} />
      ) : (
        <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
      )}
    </Container>
  );
};
