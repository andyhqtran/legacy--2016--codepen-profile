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
  color: PropTypes.string,
  height: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number,
};

const defaultProps = {
  color: '#000',
  height: 24,
};

const Logo = (props) => {
  let classes = cx('logo', props.className);

  return (
    <svg
      className={classes}
      fill="none"
      width={props.width}
      height={props.height}
      stroke={props.color}
      strokeLinejoin="round"
      style={props.style}
      viewBox="0 0 4114 743"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeWidth="70"
        d="M402.5 199.5a223.8 223.8 0 1 0 0
          343m1148.5-380V580h139a1 1 0 0 0 0-417.5zm896-.5h-290v418h290m-290-209h197m339
          244V162h151a1 1 0 0 1 0
          209h-151m808-209h-290v418h290m-290-209h197m672-243v452l-349-417v452"
      />
      <path
        strokeWidth="64"
        d="M1286 258L947 31.5 608
          258v227l339 226 339-226zM947
          35v223m0 227v226M608
          258v227l339-227 339
          227V258L947 485z"
      />
    </svg>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
