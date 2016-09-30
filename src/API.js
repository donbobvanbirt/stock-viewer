import jsonp from 'jsonp';
import ServerActions from './actions/ServerActions'

const API = {
  stockSearch(search) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${search}`, (err, data) => {

      console.log('err:', err)
      ServerActions.recieveStock(data);
      // console.log('data:', data)

    })
  },

  stockQuote(stock) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${stock}`, (err, data) => {

      console.log('err:', err)
      // console.log('data:', data)
      ServerActions.recieveQuote(data);

    })
  }
}

export default API;
