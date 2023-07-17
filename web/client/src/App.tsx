// main page
import React from 'react';
import './App.css';
import { HOME_ROUTE } from './utils/consts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/appRouter';
let logoPath = '../../../assets/triangle.png';
let additionalLogoPath = '../../../assets/abbreviation.png';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
