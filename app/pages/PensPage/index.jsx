/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

/**
 * Internal dependencies
 */
import './style.scss';
import { numberWithCommas } from '../../helpers';
import ChatboxIcon from '../../assets/img/icon-chatbox.svg';
import EyeIcon from '../../assets/img/icon-eye.svg';
import HeartIcon from '../../assets/img/icon-heart.svg';
import Card, { CardHeader, CardThumbnail, CardContent, CardFooter } from '../../components/Card';
import Loader from '../../components/Loader';

const propTypes = {
  user: PropTypes.string,
};

const defaultProps = {
  user: 'andytran',
};

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

    this._getLocation = this._getLocation.bind(this);
  }

  componentWillMount() {
    this._getPopularPens();

    window.addEventListener('scroll', this._getLocation);
  }

  componentWillUnmount() {
    this.serverRequest.abort();

    window.removeEventListener('scroll', this._getLocation);
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
          loading: false,
        });
      }
    });
  }

  _getLocation() {
    if (this.state.canLoad) {
      const windowHeight = window.innerHeight;
      const windowOffset = window.pageYOffset;
      const documentHeight = Math.max(
        document.body.offsetHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.scrollHeight
      );

      if (windowOffset + windowHeight === documentHeight) {
        this.setState({
          loading: true,
        });

        this._getPopularPens(this.state.page);
      }
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
            {numberWithCommas(pen.loves)}
          </div>
          <div className="card__info card__info--comments">
            <div className="card__icon" dangerouslySetInnerHTML={{ __html: ChatboxIcon }} />
            {numberWithCommas(pen.comments)}
          </div>
          <div className="card__info card__info--view">
            <div className="card__icon" dangerouslySetInnerHTML={{ __html: EyeIcon }} />
            {numberWithCommas(pen.views)}
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
        {this.state.loading ? <Loader /> : ''}
      </div>
    );
  }
}

PensPage.propTypes = propTypes;
PensPage.defaultProps = defaultProps;

export default PensPage;
