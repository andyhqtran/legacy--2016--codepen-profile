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
 * Temp Components
 */
const Showcase = ({ params }) => <div>{params.id}</div>;
const Public = ({ params }) => <div>{params.id}</div>;
const Popular = ({ params }) => <div>{params.id}</div>;
const Loved = ({ params }) => <div>{params.id}</div>;
const Forked = ({ params }) => <div>{params.id}</div>;
const Shots = () => <div>Shots</div>;
const Projects = () => <div>Projects</div>;

/**
 * Routes
 */
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":view">
      <IndexRoute component={Showcase} />
      <Route path="public" component={Public} />
      <Route path="popular" component={Popular} />
      <Route path="loved" component={Loved} />
      <Route path="forked" component={Forked} />
    </Route>
    <Route path="projects" component={Projects} />
    <Route path="shots" component={Shots} />
    {config.env === 'development' ? <Route path="sandbox" component={Sandbox} /> : false}
    <Redirect from="*" to="/" />
  </Route>
);

export default routes;
