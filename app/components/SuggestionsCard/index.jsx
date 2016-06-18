/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

/**
 * Internal dependencies
 */
import './style.scss';
import Card, { CardHeader, CardContent, CardFooter } from '../Card';
import Button from '../Button';

/**
 * Local variables
 */
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {};

class SuggestionsCard extends Component {
  constructor() {
    super();

    this.state = {
      more: false,
    };

    this._handleMore = this._handleMore.bind(this);
  }

  _handleMore() {
    this.setState({
      more: !this.state.more,
    });
  }

  render() {
    return (
      <Card className="card--suggestions">
        <CardHeader title="Suggestions for You" />
        <CardContent>

        </CardContent>
        <CardFooter>
          <Button
            onClick={this._handleMore}
            block
          >
            {this.state.more ? 'View Less' : 'View More'}
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

SuggestionsCard.propTypes = propTypes;
SuggestionsCard.defaultProps = defaultProps;

export default SuggestionsCard;
