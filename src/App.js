import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Layout from './components/hoc/Layout/Layout';
import Portfolio from './components/containers/Portfolio/Portfolio';
import Watchlist from './components/containers/Watchlist/Watchlist';
import positionsReducer from './store/reducers/positions';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: grey
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  positionsReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/watchlist" component={Watchlist} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/" component={Portfolio}/>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
