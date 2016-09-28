/**
 * External dependencies
 */
import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

/**
 * Internal dependencies
 */
import App from '../containers/App/App';
import Home from '../containers/Home/Home';
import Pens from '../containers/Pens/Pens';

/**
 * Routes
 */
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="pens" component={Pens} />
    </Route>
  </Router>
);

export default routes;
