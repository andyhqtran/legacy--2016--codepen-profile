/**
 * External dependencies
 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';

/**
 * Internal dependencies
 */
import App from '../containers/App/App';
import Home from '../pages/Home/Home';
import Pens from '../pages/Pens/Pens';

/**
 * Routes
 */
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pens" component={Pens} />
  </Route>
);

export default routes;
