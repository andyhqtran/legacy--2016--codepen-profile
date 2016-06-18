/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import { Container } from '../Grid';
import Logo from '../Logo';

/**
 * Local variables
 */
const propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
  style: PropTypes.object,
};

const defaultProps = {
  fixed: false,
};

const Header = (props) => {
  let classes = cx({
    header: true,
    'header--fixed': props.fixed,
  }, props.className);

  return (
    <header className={classes}>
      <Container>
        <div className="header__content">
          <Logo color="#2C2C2C" />
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
