import React from 'react';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Button from '@material-ui/core/Button';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
