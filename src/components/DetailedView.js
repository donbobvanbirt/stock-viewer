import React, { Component } from 'react'

import MarketStore from '../stores/MarketStore'
import StockDisplay from './StockDisplay'

export default class DetailedView extends Component {
  constructor() {
    super();

    this.state = {
      stock: MarketStore.getQuote()
    }
    this._onChange = this._onChange.bind(this);
    console.log('state:', this.state);
  }

  componentWillMount() {
    MarketStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MarketStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      stock: MarketStore.getQuote()
    })
    console.log('state:', this.state);
  }

  render() {
    let stock = '';

    if (this.state.stock) {
      stock = this.state.stock;
    }

    return (
      <StockDisplay stock={stock}/>
    )
  }
}
