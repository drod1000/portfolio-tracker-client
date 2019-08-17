import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Layout from './components/hoc/Layout/Layout';
import PortfolioTrackerNavbar from './components/Navigation/PortfolioTrackerNavbar/PortfolioTrackerNavbar';
import positionsReducer from './store/reducers/positions';
import watchlistReducer from './store/reducers/watchlist';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: grey
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ positions: positionsReducer, watchlist: watchlistReducer});

const store = createStore(
  reducer,
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
            <Route exact path="/home" component={PortfolioTrackerNavbar} />
            <Route path="/" component={PortfolioTrackerNavbar}/>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
