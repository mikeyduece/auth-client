import React        from 'react'
import ReactDOM     from 'react-dom'
import {
  Router,
  Route
}                   from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
}                   from 'redux'
import reduxThunk   from 'redux-thunk'

import history  from './history'
import reducers from './reducers'
// Components
import App      from './components/App'
import Welcome  from './components/Welcome'
import SignUp   from './components/auth/SignUp'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <App>
        <Route exact path='/' component={ Welcome } />
        <Route exact path='/signup' component={ SignUp } />
      </App>
    </Router>
  </Provider>,
  document.querySelector('#root')
)