/**
 * External dependencies
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: false,
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this._onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    if (window.pageYOffset > 0 && this.state.fixedHeader === false) {
      this.setState({
        fixedHeader: true,
      });
    } else if (window.pageYOffset <= 0 && this.state.fixedHeader === true) {
      this.setState({
        fixedHeader: false,
      });
    }
  }

  render() {
    return (
      <div>
        <Header fixed={this.state.fixedHeader} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
