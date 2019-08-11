import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/helpers';

const MealCard = ({
  id, name, image, price,
}) => (
  <div className="meal_card">
    <div className="meal_card_image_container">
      <img src={image} alt="" className="meal_card_image" />
    </div>
    <div className="meal_card_description">
      <span className="meal_card_name">{name}</span>
      <span className="meal_card_price">{formatPrice(price)}</span>
      <div className="edit_delete_btn_container">
        <button data-id={id} type="button" className="meal_card_edit_btn">Add to cart</button>
      </div>
    </div>
  </div>
);

MealCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MealCard;
