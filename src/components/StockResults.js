import React, { Component } from 'react'

import MarketStore from '../stores/MarketStore'

export default class StockResults extends Component {
  constructor() {
    super();

    this.state = {
      currentStock: MarketStore.getStock()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    MarketStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MarketStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      currentStock: MarketStore.getStock()
    })
    console.log('state:', this.state);
  }

  render() {
    let name = '';

    if (this.state.currentStock) {
      name = this.state.currentStock.Name;
    }


    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

}
