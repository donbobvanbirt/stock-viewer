import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  recieveStock(stock) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK',
      payload: { stock }
    })
    // console.log('stock:', stock)
  },

  recieveQuote(data) {
    AppDispatcher.dispatch({
      type: 'QUOTE',
      payload: { data }
    })
    console.log('data:', data)
  }
}

export default ServerActions;
