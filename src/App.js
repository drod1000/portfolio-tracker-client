import React from 'react';
import { Route, Switch } from "react-router-dom";
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Layout from './components/hoc/Layout/Layout';
import Portfolio from './components/containers/Portfolio/Portfolio';
import Watchlist from './components/containers/Watchlist/Watchlist';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/" component={Portfolio}/>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
