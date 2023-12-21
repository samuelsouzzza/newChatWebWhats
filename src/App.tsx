import React from 'react';
import { Home } from './pages/Home/Home';
import { ThemeProvider } from './Global/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
