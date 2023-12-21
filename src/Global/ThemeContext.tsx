import React from 'react';

type ITheme = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = React.createContext<ITheme | null>(null);

export const UseThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (!context) throw new Error('useContext deve estar dentro do provider.');

  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('themeNewChat')
      ? Boolean(localStorage.getItem('themeNewChat'))
      : false
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
