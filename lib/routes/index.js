/**
 * External dependencies
 */
import React from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';

/**
 * Internal dependencies
 */
import config from '../../config';
import App from '../containers/App/App';
import Collections from '../pages/Collections/Collections';
import Home from '../pages/Home/Home';
import Pens from '../pages/Pens/Pens';
import Posts from '../pages/Posts/Posts';
import Sandbox from '../pages/Sandbox/Sandbox';

/**
 * <Temp />
 */
const Temp = () => <div>TEMP</div>;

/**
 * Routes
 */
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pens" component={Pens}>
      <IndexRoute component={Temp} />
      <Route path="public" component={Temp} />
      <Route path="popular" component={Temp} />
      <Route path="loved" component={Temp} />
      <Route path="forked" component={Temp} />
    </Route>
    <Route path="posts" component={Posts} />
    <Route path="collections" component={Collections} />
    {config.env === 'development' ? <Route path="sandbox" component={Sandbox} /> : false}
    <Redirect from="*" to="/" />
  </Route>
);

export default routes;
