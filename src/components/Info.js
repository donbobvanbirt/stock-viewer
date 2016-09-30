import React, { Component } from 'react'

import MarketActions from '../actions/MarketActions'
import StockResults from './StockResults'

export default class Info extends Component {

  constructor(props) {
    super(props);

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(e) {
    e.preventDefault();
    let search = this.refs.searchBar.value;
    // console.log('info button clicked:', stock)
    MarketActions.stockSearch(search);
  }

  getStock(stock) {
    MarketActions.stockQuote(stock);
  }

  componentWillMount() {
    MarketActions.stockSearch();
  }

  render() {
    return (
      <div className="form-group">
        <form>
          <input type="text" className="form-control" ref='searchBar' id='searchBar' required/>
          <button onClick={this.getInfo} className="btn btn-default">Find Stocks</button>
        </form>
        <StockResults getStock={this.getStock}/>
      </div>
    )
  }
}
