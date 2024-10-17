import React, { FC } from 'react';
import "../styles/app.scss";
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from './WelcomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../constants/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App">
        <Routes>
          <Route path={"/"} Component={WelcomePage}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;