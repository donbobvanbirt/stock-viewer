import React, { Component } from 'react'
import numeral from 'numeral';

const StockDisplay = props => {

  let { Name, LastPrice, Change, MarketCap, ChangePercent, High, ChangeYTD, ChangePercentYTD, Low, Open, Symbol } = props.stock;

  let percent = (parseFloat(ChangePercent) / 100).toString();
  let percentYTD = (parseFloat(ChangePercentYTD) / 100).toString();

  return (
    <div>
      <h3 className="text-center">{Name} {numeral(LastPrice).format('$0,0.00')}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Name}</td>
            <td>Last: {numeral(LastPrice).format('$0,0.00')}</td>
            <td>{numeral(Change).format('$0,0.00')} / {numeral(percent).format('0.000%')}</td>
            <td>{numeral(MarketCap).format('$0,0.00')}</td>
          </tr>
          <tr>
            <td>{Symbol}</td>
            <td>High: {numeral(High).format('$0,0.00')}</td>
            <td>YTD: {numeral(ChangeYTD).format('$0,0.00')} / {numeral(percentYTD).format('0.000%')}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Low: {numeral(Low).format('$0,0.00')}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Open: {numeral(Open).format('$0,0.00')}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => props.getStock(Symbol)} className="btn btn-success">Refresh</button>
    </div>
  )
}

export default StockDisplay;
