import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import Portfolio from '../../containers/Portfolio/Portfolio';
import Watchlist from '../../containers/Watchlist/Watchlist';
import TabPanel from '../TabPanel/TabPanel';

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    marginBottom: 24
  }
}))

const PortfolioTrackerNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Portfolio" {...a11yProps(0)} />
          <Tab label="Watchlist" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Portfolio></Portfolio>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Watchlist></Watchlist>
      </TabPanel>
    </div>
  )
}

export default PortfolioTrackerNavbar;