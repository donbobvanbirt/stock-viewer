import API from '../API'

const MarketActions = {
  stockSearch(search) {
    API.stockSearch(search);
  },

  stockQuote(stock) {
    API.stockQuote(stock)
  }
}

export default MarketActions;
