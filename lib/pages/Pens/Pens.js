/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';


/**
 * Local variables
 */
const propTypes = {
  changeHeader: PropTypes.func,
};

const defaultProps = {};

/**
 * <Pens />
 */
class Pens extends Component {
  componentDidMount() {
    this.props.changeHeader('Pens');
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet title="Pens" />
        {children}
      </div>
    );
  }
}

Pens.propTypes = propTypes;
Pens.defaultProps = defaultProps;

export default Pens;
