import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/helpers';

const MealCard = ({ label, item, children }) => (
  <div className="meal_card">
    <div className="meal_card_image_container">
      <img src={item.image} alt="" className="meal_card_image" />
    </div>
    <div className="meal_card_description">
      <span className="meal_card_name">{item.name}</span>
      <span className="meal_card_price">{formatPrice(item.price)}</span>
      {label}
      <div className="edit_delete_btn_container">
        {children}
      </div>
    </div>
  </div>
);


MealCard.defaultProps = {
  label: '',
};

MealCard.propTypes = {
  item: PropTypes.shape().isRequired,
  label: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default MealCard;
