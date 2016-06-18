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
import Card, { CardHeader, CardFrame, CardContent, CardFooter } from '../../components/Card';

class PensPage extends Component {
  constructor() {
    super();

    this.state = {
      pens: [],
    };
  }
  componentWillMount() {
    this._getPopularPens();
  }

  _getPopularPens() {
    this.serverRequest = $.get(`http://cpv2api.com/pens/popular/${this.props.user}`, (result) => {
      this.setState({
        pens: result.data,
      });
    });
  }

  _renderCard(pen, index) {
    return (
      <Card key={`pen-${index}`}>
        <CardHeader>
          <a href={`http://codepen.io/${pen.user.username}/pen/${pen.id}`}>{pen.title}</a>
          <a href={`http://codepen.io/${pen.user.username}`}><span>{pen.user.nicename}</span></a>
        </CardHeader>
        <CardFrame src={`http://s.codepen.io/${pen.user.username}/debug/${pen.id}`} />
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
        {this.state.pens.map(this._renderCard)}
      </div>
    );
  }
}

export default PensPage;
