/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Tooltip from 'react-tooltip';

/**
 * Internal dependencies
 */
import config from '../../../config';
import Sidebar from '../../components/Sidebar/Sidebar';

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

    this._changeType = this._changeType.bind(this);
  }

  _changeType(type) {
    this.setState({ type });
  }

  render() {
    const { children } = this.props;
    const { name, type } = this.state;

    return (
      <div className="app">
        <Helmet
          titleTemplate={`%s - ${name}`}
          defaultTitle={name}
        />
        <Sidebar
          name={name}
          type={type}
          changeType={this._changeType}
        />
        <main className="content">
          {children}
        </main>
        <Tooltip
          globalEventOff="click"
          effect="solid"
          type="dark"
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
