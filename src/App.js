import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './containers/home'
import Detail from './containers/detail'
function App() {
  return (
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
  );
}

export default App;
