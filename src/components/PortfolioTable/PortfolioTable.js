import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import { StyledTableRow, StyledTableCell } from '../styled/Table/Table';
import StockPositionMenu from '../StockPositionMenu/StockPositionMenu';

const generateRows = (positions) => {
  const rows = positions.map(p => {
    return {
      positionId: p.PositionId,
      symbol: p.StockSymbol,
      quantity: p.Quantity,
      currentPrice: p.CurrentPrice,
      marketValue: (p.CurrentPrice * p.Quantity),
      dollarGain: ((p.CurrentPrice - p.BuyPrice) * p.Quantity),
      percentageGain: ((p.CurrentPrice - p.BuyPrice) / p.CurrentPrice * 100)
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
            <StyledTableCell align="right">
              <StockPositionMenu stockPosition={p}/>
            </StyledTableCell>
            <StyledTableCell align="right">{p.quantity}</StyledTableCell>
            <StyledTableCell align="right">${p.currentPrice.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">${p.marketValue.toFixed(2)}</StyledTableCell>
            <StyledTableCell
              className={p.dollarGain >= 0 ? 'positive' : 'negative'}
              align="right">{p.dollarGain.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell
              className={p.percentageGain >= 0 ? 'positive' : 'negative'}
              align="right">{p.percentageGain.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PortfolioTable;