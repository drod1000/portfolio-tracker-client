import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = {
  paper: {
    padding: 24,
    minWidth: '1024px'
  },
  typography: {
    marginBottom: 12
  },
  table: {
  }
}

function createData(symbol, quantity, price) {
  return { symbol, quantity, price, marketValue: quantity * price };
}

const rows = [
  createData('AAPL', 10, 175.00),
  createData('FB', 20, 200.00),
  createData('SBUX', 25, 80.00),
  createData('PEP', 15, 125.00),
  createData('TSN', 30, 80.00),
  createData('WM', 30, 125.00),
  createData('TGT', 50, 75.00),
  createData('ALL', 20, 100.00),
  createData('DIS', 15, 125.00),
  createData('NKE', 20, 100.00)
];

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography className={classes.typography} variant="h4" color="primary">Portfolio</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price (USD)</TableCell>
              <TableCell>Market Value (USD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.symbol}>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>${row.price}</TableCell>
                <TableCell>${row.marketValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio);