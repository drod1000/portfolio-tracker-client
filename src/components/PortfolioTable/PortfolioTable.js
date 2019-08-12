import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const PortfolioTable = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Symbol</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price ($)</TableCell>
          <TableCell>Market Value ($)</TableCell>
          <TableCell>Gain ($)</TableCell>
          <TableCell>Gain (%)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.positions.map(p => (
          <TableRow key={p.symbol}>
            <TableCell>{p.symbol}</TableCell>
            <TableCell>{p.quantity}</TableCell>
            <TableCell>${p.currentPrice.toFixed(2)}</TableCell>
            <TableCell>${(p.currentPrice * p.quantity).toFixed(2)}</TableCell>
            <TableCell>{((p.currentPrice - p.buyPrice) * p.quantity).toFixed(2)}</TableCell>
            <TableCell>{((p.currentPrice - p.buyPrice) / p.currentPrice * 100).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PortfolioTable;