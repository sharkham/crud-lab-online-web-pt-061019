import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.map(review => {
      if (review.restaurantId === this.props.restaurant.id) {
        return <Review key={review.id} review={review} delete={this.props.delete}/>
      }
    })
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
