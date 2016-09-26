/**
 * External dependencies
 */
import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

/**
 * Internal dependencies
 */
import Home from '../containers/Home/Home.js';

/**
 * Routes
 */
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
);

export default routes;
