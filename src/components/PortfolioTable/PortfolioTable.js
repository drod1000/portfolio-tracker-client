import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const PortfolioTable = (props) => {
  return (
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align="right">Symbol</StyledTableCell>
          <StyledTableCell align="right">Quantity</StyledTableCell>
          <StyledTableCell align="right">Price ($)</StyledTableCell>
          <StyledTableCell align="right">Market Value ($)</StyledTableCell>
          <StyledTableCell align="right">Gain ($)</StyledTableCell>
          <StyledTableCell align="right">Gain (%)</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {props.positions.map(p => (
          <StyledTableRow key={p.symbol}>
            <StyledTableCell align="right">{p.symbol}</StyledTableCell>
            <StyledTableCell align="right">{p.quantity}</StyledTableCell>
            <StyledTableCell align="right">${p.currentPrice.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">${(p.currentPrice * p.quantity).toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">{((p.currentPrice - p.buyPrice) * p.quantity).toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">{((p.currentPrice - p.buyPrice) / p.currentPrice * 100).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PortfolioTable;