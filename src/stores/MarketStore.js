import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _stock = null;

class MarketStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_STOCK':
          _stock = action.payload.stock;
          console.log('stock:', _stock);
          this.emit('CHANGE');
          break;
        default:

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
    return _stock;
  }
}

export default new MarketStore;
