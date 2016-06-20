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
import Card, { CardHeader, CardFrame, CardThumbnail, CardContent, CardFooter } from '../../components/Card';
import Loader from '../../components/Loader';

class PensPage extends Component {
  constructor() {
    super();

    this.state = {
      canLoad: true,
      hasPens: true,
      loading: true,
      page: 1,
      pens: [],
    };
  }
  componentWillMount() {
    this._getPopularPens();

    window.addEventListener('scroll', this._getLocation());
  }

  componentWillUmount() {
    this.serverRequest.abort();

    window.removeEventListener('scroll', this._getLocation());
  }

  _getPopularPens() {
    this.setState({
      canLoad: false,
    });

    this.serverRequest = $.get(`http://cpv2api.com/pens/popular/${this.props.user}?page=${this.state.page}`, (result) => {
      if (result.success) {
        this.setState({
          canLoad: true,
          hasPens: true,
          page: this.state.page + 1,
          pens: this.state.pens.concat(result.data),
          loading: false,
        });
      } else {
        this.setState({
          hasPens: false,
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

          this._getPopularPens(this.state.page);
        }
      });
    }
  }

  _renderCard(pen, index) {
    return (
      <Card key={`pen-${index}`}>
        <CardHeader>
          <a href={`http://codepen.io/${pen.user.username}/pen/${pen.id}`}>{pen.title}</a>
          <a href={`http://codepen.io/${pen.user.username}`}><span>{pen.user.nicename}</span></a>
        </CardHeader>
        <a href={`http://codepen.io/${pen.user.username}/pen/${pen.id}`}>
          <CardThumbnail src={pen.images.large} alt={pen.title} />
        </a>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: pen.details }} />
        </CardContent>
        <CardFooter>
          <div className="card__info card__info--hearts">
            <span className="card__icon" dangerouslySetInnerHTML={{ __html: HeartIcon }} />
            {pen.loves}
          </div>
          <div className="card__info card__info--comments">
            <div className="card__icon" dangerouslySetInnerHTML={{ __html: ChatboxIcon }} />
            {pen.comments}
          </div>
          <div className="card__info card__info--view">
            <div className="card__icon" dangerouslySetInnerHTML={{ __html: EyeIcon }} />
            {pen.views}
          </div>
        </CardFooter>
      </Card>
    );
  }

  render() {
    return (
      <div className="page page--pens">
        {this.state.pens.length > 0 ?
          this.state.pens.map(this._renderCard) : ''}
        {this.state.hasPens ? '' : <Card><CardContent>No pens available.</CardContent></Card>}
        {this.state.loading && this.state.canLoad ? <Loader /> : ''}
      </div>
    );
  }
}

export default PensPage;
