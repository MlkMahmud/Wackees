import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestaurantCard = ({ id, image, name }) => (
  <Link to={`/restaurants/${id}`}>
    <div className="restaurant">
      <img src={image} alt="" className="restaurant_image" />
      <div className="restaurant_information">
        <p className="restaurant_name">{name}</p>
        <span className="restaurant_rating">
          <FontAwesomeIcon icon="star" />
          5.0
        </span>
      </div>
    </div>
  </Link>
);

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RestaurantCard;
