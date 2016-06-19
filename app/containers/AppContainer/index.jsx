/**
 * External dependencies
 */
import React, { Component, cloneElement } from 'react';

/**
 * Internal dependencies
 */
import { Container, Row, Column } from '../../components/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SuggestionsCard from '../../components/SuggestionsCard';
import TrendingCard from '../../components/TrendingCard';
import UserCard from '../../components/UserCard';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'andytran',
      fixedHeader: false,
    };
  }

  componentWillMount() {
    this.setState({
      windowWidth: window.innerWidth,
    });

    window.addEventListener('resize', this._handleResize.bind(this));
    window.addEventListener('scroll', this._onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('scroll', this._onScroll);
  }

  _handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
    });
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
      <div className="app">
        <Header fixed={this.state.fixedHeader} />
        <Container>
          <Row>
            <Column size={this.state.windowWidth >= 960 ? 3 : 4}>
              <UserCard user={this.state.user} />
              <TrendingCard />

              {this.state.windowWidth >= 960 ? '' : <SuggestionsCard />}
              {this.state.windowWidth >= 960 ? '' : <Footer />}
            </Column>
            <Column size={this.state.windowWidth >= 960 ? 6 : 8}>
              {this.props.children && cloneElement(this.props.children, {
                user: this.state.user,
              })}
            </Column>
            {this.state.windowWidth >= 960 ?
              <Column size={3}><SuggestionsCard /><Footer /></Column> : ''}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AppContainer;