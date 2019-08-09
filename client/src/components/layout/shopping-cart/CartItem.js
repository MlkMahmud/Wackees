import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import deleteFromCart from '../../../dispatchers/deleteItemFromCart';

const CartItem = ({ item, deleteItem }) => (
  <div className="cart_item_container">
    <div className="cart_item_image_container">
      <img src={item.image} alt="cart item" />
    </div>
    <div className="cart_item_details">
      <div className="cart_item">
        <span className="cart_item_name">{item.name}</span>
        <span className="cart_item_price">{`N${item.price}`}</span>
      </div>
      <div className="cart_item_quantity">
        <label htmlFor="qty">
          Qty:
          {' '}
          <input type="number" defaultValue="1" className="qty" />
        </label>
        <button type="button" className="item_del_btn" onClick={() => deleteItem(item.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  deleteItem: deleteFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
