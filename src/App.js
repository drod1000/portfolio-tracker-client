import React from 'react';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Layout from './components/hoc/Layout/Layout';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
