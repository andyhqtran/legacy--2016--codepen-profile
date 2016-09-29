/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import config from '../../../config';

if (config.browser) require('./Sidebar.scss');

/**
 * <Sidebar />
 */
const Sidebar = () => (
  <aside className="sidebar">
    Sidebar
  </aside>
);

export default Sidebar;
