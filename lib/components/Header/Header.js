/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Tabs from '../Tabs/Tabs';

/**
 * Lcoal variables
 */
const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {};

/**
 * <Header />
 */
const Header = ({ title }) => (
  <header className="header">
    <div className="header__top">
      <h1 className="header__title">{title}</h1>
      <div className="header__content">
        test
      </div>
    </div>
    <div className="header__bottom">
      <Tabs />
    </div>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
