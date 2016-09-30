import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _stockList = null;
let _stockQuote = null;

class MarketStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_STOCK':
          _stockList = action.payload.stock;
          // console.log('stock:', _stockList);
          this.emit('CHANGE');
          break;
        case 'QUOTE':
          _stockQuote = action.payload.data;
          // console.log('_stockQuote', _stockQuote);
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getStock() {
    return _stockList;
  }

  getQuote() {
    return _stockQuote
  }
}

export default new MarketStore;
