/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

/**
 * Local variables
 */
const propTypes = {
  name: PropTypes.string,
  type: PropTypes.number,
};

const defaultProps = {};

/**
 * <Sidebar />
 */
const Sidebar = ({ name, type }) => (
  <aside className="sidebar">
    <div className="sidebar__top">
      <Link to="/">
        <Logo
          color="#007EE5"
          size={32}
          type={type}
        />
      </Link>
    </div>

    <Link to="/" className="sidebar__header">
      {name}
      <span>beta</span>
    </Link>

    <div className="sidebar__content">
      <Nav type={type} />
    </div>

    <div className="sidebar__footer">
      Footer
    </div>
  </aside>
);

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
