/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Local variables
 */
const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {};

/**
 * <CardHeader />
 */
const CardHeader = (props) => {
  let classes = cx('card__header', props.className);

  return (
    <div className={classes}>
      {props.title}
    </div>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
