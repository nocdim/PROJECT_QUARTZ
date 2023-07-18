// main page
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/appRouter';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
