/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import config from '../../../config';

/**
 * Local variables
 */
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

/**
 * <App />
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: config.name,
      type: config.type,
    };
  }

  render() {
    const { children } = this.props;
    const { name } = this.state;

    return (
      <div className="app">
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          titleTemplate={`%s - ${name}`}
          defaultTitle={name}
        />
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
