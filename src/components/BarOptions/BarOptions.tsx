import React from 'react';
import { Container } from './BarOptions.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { UseThemeContext } from '../../Global/ThemeContext.tsx';

export const BarOptions = () => {
  const { theme, setTheme } = UseThemeContext();

  function handleTheme() {
    setTheme(!theme);
    localStorage.setItem('themeNewChat', String(theme));
  }

  return (
    <Container>
      {theme ? (
        <FontAwesomeIcon icon={faMoon} onClick={handleTheme} />
      ) : (
        <FontAwesomeIcon icon={faSun} onClick={handleTheme} />
      )}
    </Container>
  );
};
