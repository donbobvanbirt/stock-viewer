import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  recieveStock(stock) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK',
      payload: { stock }
    })
    // console.log('stock:', stock)
  }
}

export default ServerActions;
