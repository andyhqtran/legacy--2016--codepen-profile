/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import config from '../../../config';
import Logo from '../Logo/Logo';

if (config.browser) require('./Sidebar.scss');

/**
 * Local variables
 */
const propTypes = {
  name: PropTypes.string,
};

const defaultProps = {};

/**
 * <Sidebar />
 */
const Sidebar = ({ name }) => (
  <aside className="sidebar">
    <div className="sidebar__top">
      <Link to="/">
        <Logo size={32} />
      </Link>
    </div>
    <div className="sidebar__header">
      <Link to="/">
        {name}
      </Link>
    </div>
    Sidebar
  </aside>
);

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
