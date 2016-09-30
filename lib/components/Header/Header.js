/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import { capitalizeFirstLetter } from '../../helpers';
import Tabs from '../Tabs/Tabs';

/**
 * Lcoal variables
 */
const propTypes = {
  params: PropTypes.object,
};

const defaultProps = {};

/**
 * <Header />
 */
const Header = ({ params }) => (
  <header className="header">
    <div className="header__top">
      <h1 className="header__title">{params.view ? capitalizeFirstLetter(params.view) : false}</h1>
      <div className="header__content">
        test
      </div>
    </div>
    <div className="header__bottom">
      <Tabs params={params} />
    </div>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
