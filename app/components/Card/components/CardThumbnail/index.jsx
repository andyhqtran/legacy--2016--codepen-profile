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
 * <CardThumbnail />
 */
const CardThumbnail = (props) => {
  let classes = cx('card__thumbnail', props.className);

  return (
    <div className={classes}>
      {props.title}
    </div>
  );
};

CardThumbnail.propTypes = propTypes;
CardThumbnail.defaultProps = defaultProps;

export default CardThumbnail;
