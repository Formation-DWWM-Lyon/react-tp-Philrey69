import React from 'react';
import ControlList from './containers/ControlList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './components/User';

function App() {
  return (
    <div>
      <h1>DEVELOPPERS</h1>
      <ControlList />
      <BrowserRouter>
        <Switch>
          <Route exact path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
