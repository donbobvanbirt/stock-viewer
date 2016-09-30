import jsonp from 'jsonp';
import ServerActions from './actions/ServerActions'

const API = {
  stockSearch() {
    jsonp('http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=K', (err, data) => {

      console.log('err:', err)
      ServerActions.recieveStock(data);
      // console.log('data:', data)

    })
  }
}

export default API;
