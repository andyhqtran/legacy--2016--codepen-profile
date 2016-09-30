/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

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
    <h1 className="header__title">{title}</h1>
    <div className="header__content">
      test
    </div>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
