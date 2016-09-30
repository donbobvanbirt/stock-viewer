import React from 'react'
import { Link } from 'react-router'

const ResultsList = props => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>

          {props.results.map((stock, index) => {
            return (
              <tr key={index}>
                <td><Link onClick={() => props.getStock(stock.Symbol)} to="/detailed-view">{stock.Symbol}</Link></td>
                <td><Link onClick={() => props.getStock(stock.Symbol)} to="/detailed-view">{stock.Name}</Link></td>
                <td><Link onClick={() => props.getStock(stock.Symbol)} to="/detailed-view">{stock.Exchange}</Link></td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default ResultsList;
