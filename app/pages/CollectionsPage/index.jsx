/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

/**
 * Internal dependencies
 */
import './style.scss';
import ChatboxIcon from '../../assets/img/icon-chatbox.svg';
import EyeIcon from '../../assets/img/icon-eye.svg';
import HeartIcon from '../../assets/img/icon-heart.svg';
import Card, { CardHeader, CardContent, CardFooter } from '../../components/Card';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

class CollectionsPage extends Component {
  constructor() {
    super();

    this.state = {
      canLoad: true,
      hasCollectionss: true,
      loading: true,
      page: 1,
      collections: [],
    };
  }
  componentWillMount() {
    this._getPopularCollections();

    window.addEventListener('scroll', this._getLocation());
  }

  componentWillUmount() {
    this.serverRequest.abort();
  }

  _getPopularCollections() {
    this.serverRequest = $.get(`http://cpv2api.com/collections/popular/${this.props.user}?page=${this.state.page}`, (result) => {
      if (result.success) {
        this.setState({
          hasCollections: true,
          page: this.state.page + 1,
          collections: this.state.collections.concat(result.data),
          loading: false,
        });
      } else {
        this.setState({
          hasCollections: false,
          canLoad: false,
        });
      }
    });
  }

  _getLocation() {
    if (this.state.canLoad) {
      $(window).scroll(() => {
        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
          this.setState({
            loading: true,
          });

          this._getPopularCollections(this.state.page);
        }
      });
    }
  }

  _renderCard(collection, index) {
    return (
      <Card key={`collection-${index}`}>
        <CardHeader>
          <a href={collection.link}>{collection.title}</a>
          <span>{collection.penCount}</span>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: collection.details }} />
        </CardContent>
        <CardFooter>
          <a href={collection.url}>
            <Button block>View Collection</Button>
          </a>
        </CardFooter>
      </Card>
    );
  }

  render() {
    return (
      <div className="page page--collections">
        {this.state.collections.length > 0 ?
          this.state.collections.map(this._renderCard) : ''}
        {this.state.hasCollections ? '' : <Card><CardContent>No collections available.</CardContent></Card>}
        {this.state.loading && this.state.canLoad ? <Loader /> : ''}
      </div>
    );
  }
}

export default CollectionsPage;
