import React from 'react';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import { StyledTableRow, StyledTableCell } from '../styled/Table/Table';

const generateRows = (watchlist) => {
  const rows = watchlist.map(p => {
    const formattedDate = moment(p).format('MM/DD/YYYY');
    return {
      symbol: p.StockSymbol,
      watchDate: formattedDate,
      watchPrice: p.WatchPrice,
      currentPrice: p.CurrentPrice,
      percentageGain: ((p.CurrentPrice - p.WatchPrice) / p.CurrentPrice * 100)
    }
  })

  return rows;
}

const WatchlistTable = (props) => {
  const rows = generateRows(props.watchlist);

  return (
    <Table>
      <TableHead>
        <StyledTableRow>
        <StyledTableCell align="right">Symbol</StyledTableCell>
        <StyledTableCell align="right">Watch Date</StyledTableCell>
        <StyledTableCell align="right">Watch Price ($)</StyledTableCell>
        <StyledTableCell align="right">Current Price ($)</StyledTableCell>
        <StyledTableCell align="right">Gain (%)</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map(i => (
          <StyledTableRow key={i.symbol}>
            <StyledTableCell align="right">{i.symbol}</StyledTableCell>
            <StyledTableCell align="right">{i.watchDate}</StyledTableCell>
            <StyledTableCell align="right">${i.watchPrice.toFixed(2)}</StyledTableCell>
            <StyledTableCell align="right">${i.currentPrice.toFixed(2)}</StyledTableCell>
            <StyledTableCell
              className={i.percentageGain >= 0 ? 'positive' : 'negative'}
              align="right">{i.percentageGain.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default WatchlistTable;