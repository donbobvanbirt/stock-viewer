import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Info from './components/Info'
import DetailedView from './components/DetailedView'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={Info}/>
      <Route path='/detailed-view' component={DetailedView} />
    </Route>

  </Router>,
  document.getElementById('root')
);
