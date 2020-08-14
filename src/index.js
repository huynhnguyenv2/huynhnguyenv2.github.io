import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
