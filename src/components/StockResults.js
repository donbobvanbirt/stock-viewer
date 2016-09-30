import React, { Component } from 'react'

import MarketStore from '../stores/MarketStore'
import ResultsList from './ResultsList'

export default class StockResults extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: MarketStore.getStock()
    }
    this._onChange = this._onChange.bind(this);
    // console.log('state:', this.state);
  }

  componentWillMount() {
    MarketStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MarketStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      searchResults: MarketStore.getStock()
    })
    // console.log('state:', this.state);
  }

  render() {
    let results = [];

    if (this.state.searchResults) {
      results = this.state.searchResults;
    }


    return (
      <div>
        <ResultsList getStock={this.props.getStock} results={results} />
      </div>
    )
  }

}
