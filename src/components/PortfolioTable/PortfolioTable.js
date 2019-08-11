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
          <TableCell>Price (USD)</TableCell>
          <TableCell>Market Value (USD)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.positions.map(p => (
          <TableRow key={p.symbol}>
            <TableCell>{p.symbol}</TableCell>
            <TableCell>{p.quantity}</TableCell>
            <TableCell>${p.price}</TableCell>
            <TableCell>${p.marketValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PortfolioTable;