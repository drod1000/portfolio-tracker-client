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
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const generateRows = (positions) => {
  const rows = positions.map(p => {
    return {
      symbol: p.symbol,
      quantity: p.quantity,
      currentPrice: p.currentPrice,
      marketValue: (p.currentPrice * p.quantity),
      dollarGain: ((p.currentPrice - p.buyPrice) * p.quantity),
      percentageGain: ((p.currentPrice - p.buyPrice) / p.currentPrice * 100)
    }
  })

  return rows;
}

const PortfolioTable = (props) => {
  const rows = generateRows(props.positions);

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
        {rows.map(p => (
          <StyledTableRow key={p.symbol}>
            <StyledTableCell align="right">{p.symbol}</StyledTableCell>
            <StyledTableCell align="right">{p.quantity}</StyledTableCell>
            <StyledTableCell align="right">${p.currentPrice.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">${p.marketValue.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">{p.dollarGain.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">{p.percentageGain.toFixed(2)}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PortfolioTable;