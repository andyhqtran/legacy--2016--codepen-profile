/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Local variables;
 */
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

/**
 * <ButtonGroup />
 */
const ButtonGroup = ({ children }) => (
  <div className="button-group">
    {children}
  </div>
);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
