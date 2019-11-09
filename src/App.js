import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';

import Home from './containers/home';
import Detail from './containers/detail';
function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
