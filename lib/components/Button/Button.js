/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import './Button.scss';

/**
 * Local variables;
 */
const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

const defaultProps = {
  block: false,
  onClick: noop,
  type: 'button',
};

/**
 * <Button />
 */
const Button = ({
  block,
  children,
  className,
  onClick,
  style,
  type,
}) => {
  const classes = cx({
    button: true,
    'button--block': block,
  }, className);

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
