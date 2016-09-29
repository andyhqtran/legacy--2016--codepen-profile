/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import config from '../../../config';
import Sidebar from '../../components/Sidebar/Sidebar';

if (config.browser) require('./App.scss');

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
    };
  }

  render() {
    const { children } = this.props;
    const { name } = this.state;

    return (
      <div className="app">
        <Helmet
          titleTemplate={`%s - ${name}`}
          defaultTitle={name}
        />
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
