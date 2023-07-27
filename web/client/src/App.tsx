// main page
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/appRouter';

const App = () => {
  const [theme, setTheme] = useState<boolean>(false); // default chaos theme
  return (
    <>
      <div className={"App" + String(theme)}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
