import React from 'react';

type ITheme = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ITheme | null>(null);

export const UseThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (!context) throw new Error('useContext deve estar dentro do provider.');

  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [darkTheme, setDarkTheme] = React.useState(
    JSON.parse(localStorage.getItem('themeNewChat') as string)
  );

  React.useEffect(() => {
    localStorage.setItem('themeNewChat', String(darkTheme));
  }, [darkTheme]);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
