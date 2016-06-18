/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.scss';
import { Container } from '../Grid';
import Logo from '../Logo';
import Nav from '../Nav';

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

  let menu = [
    [
      {
        index: true,
        url: '/',
        children: 'Pens',
      },
      {
        url: '/posts',
        children: 'Posts',
      },
      {
        url: '/collections',
        children: 'Collections',
      },
    ],
  ];

  return (
    <header className={classes}>
      <Container>
        <div className="header__content">
          <Nav menus={menu} />
          <Link to="/">
            <Logo color="#2C2C2C" />
          </Link>
          <div />
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
