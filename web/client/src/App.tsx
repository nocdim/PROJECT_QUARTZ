// main page
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/appRouter';
import Toggle from './components/Toggle/ToggleFI';

const imgForToggle = require("./assets/logo.png");

const App = () => {
  const [theme, setTheme] = useState<boolean>(false); // default chaos theme
  return (
    <>
      <Toggle 
        img={imgForToggle}
        theme={theme}
        onClick={() => setTheme(!theme)}
      />
      <div className={"App" + String(theme)}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
