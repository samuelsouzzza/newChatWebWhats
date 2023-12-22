import React from 'react';
import { Home } from './pages/Home/Home';
import { ThemeProvider } from './Global/ThemeContext';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
