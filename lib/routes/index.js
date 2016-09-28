/**
 * External dependencies
 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';

/**
 * Internal dependencies
 */
import config from '../../config';
import App from '../containers/App/App';
import Home from '../pages/Home/Home';
import Pens from '../pages/Pens/Pens';
import Sandbox from '../pages/Sandbox/Sandbox';

/**
 * Routes
 */
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pens" component={Pens} />
    {config.env === 'development' ?
      <Route path="sandbox" component={Sandbox} /> : false}
  </Route>
);

export default routes;
