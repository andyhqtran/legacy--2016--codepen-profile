/**
 * External dependencies
 */
import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

/**
 * Internal dependencies
 */
import AppContainer from './containers/AppContainer';
import CollectionsPage from './pages/CollectionsPage';
import PensPage from './pages/PensPage';
import PostsPage from './pages/PostsPage';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PensPage} />
      <Route path="pens" component={PensPage} />
      <Route path="posts" component={PostsPage} />
      <Route path="collections" component={CollectionsPage} />
    </Route>
  </Router>
);

export default Routes;
