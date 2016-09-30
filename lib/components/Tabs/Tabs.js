/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * <Tabs />
 */
const Tabs = () => (
  <nav className="tabs">
    <Link
      activeClassName="tabs__item--active"
      className="tabs__item"
      to="/pens/public"
    >
      Public
    </Link>
    <Link
      activeClassName="tabs__item--active"
      className="tabs__item"
      to="/pens/popular"
    >
      Popular
    </Link>
    <Link
      activeClassName="tabs__item--active"
      className="tabs__item"
      to="/pens/loved"
    >
      Loved
    </Link>
    <Link
      activeClassName="tabs__item--active"
      className="tabs__item"
      to="/pens/forked"
    >
      Forked
    </Link>
  </nav>
);

export default Tabs;
