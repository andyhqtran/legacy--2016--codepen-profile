/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

/**
 * Internal dependencies
 */
import './style.scss';
import { Column } from '../../components/Grid';
import Card, { CardHeader, CardThumbnail, CardContent, CardFooter } from '../../components/Card';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

class FollowingPage extends Component {
  constructor() {
    super();

    this.state = {
      canLoad: true,
      hasFollowers: true,
      loading: true,
      page: 1,
      followers: [],
    };

    this._getLocation = this._getLocation.bind(this);
  }

  componentWillMount() {
    this._getPopularFollowers();

    window.addEventListener('scroll', this._getLocation);
  }

  componentWillUnmount() {
    this.serverRequest.abort();

    window.removeEventListener('scroll', this._getLocation);
  }

  _getPopularFollowers() {
    this.setState({
      canLoad: false,
    });

    this.serverRequest = $.get(`http://cpv2api.com/following/${this.props.user}?page=${this.state.page}`, (result) => {
      if (result.success) {
        this.setState({
          canLoad: true,
          hasFollowers: true,
          page: this.state.page + 1,
          followers: this.state.followers.concat(result.data),
          loading: false,
        });
      } else {
        this.setState({
          hasFollowers: false,
          loading: false,
        });
      }
    });
  }

  _getLocation() {
    if (this.state.canLoad) {
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        this.setState({
          loading: true,
        });

        this._getPopularFollowers(this.state.page);
      }
    }
  }

  _renderCard(follower, index) {
    return (
      <Card
        key={`follower-${index}`}
        className="card--follower"
      >
        <CardThumbnail src={follower.avatar} />
        <CardContent>
          <div className="follower">
            <div className="follower__avatar">
              <img src={follower.avatar} alt={follower.nicename} />
            </div>
            <div className="follower__title" dangerouslySetInnerHTML={{ __html: follower.nicename }} />
            <div className="follower__sub-title">@{follower.username}</div>
          </div>
        </CardContent>
        <CardFooter>
          <a href={follower.url}>
            <Button block>
              View Profile
            </Button>
          </a>
        </CardFooter>
      </Card>
    );
  }

  render() {
    return (
      <div className="page page--following">
        {this.state.followers.length > 0 ?
          this.state.followers.map(this._renderCard) : ''}
        {this.state.hasFollowers ? '' : <Card className="card--error"><CardContent>No followers available.</CardContent></Card>}
        {this.state.loading ? <Loader /> : ''}
      </div>
    );
  }
}

export default FollowingPage;
