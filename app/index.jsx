/**
 * External dependencies
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * Internal dependencies
 */
import './style.scss';
import { Container, Row, Column } from './components/Grid';
import Header from './components/Header';
import Card, { CardHeader, CardContent } from './components/Card';
import SuggestionsCard from './components/SuggestionsCard';
import TrendingCard from './components/TrendingCard';
import UserCard from './components/UserCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'andytran',
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
        <Container>
          <Row>
            <Column size={3}>
              <UserCard user={this.state.user} />
              <TrendingCard />
            </Column>
            <Column size={6}></Column>
            <Column size={3}>
              <SuggestionsCard />
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
