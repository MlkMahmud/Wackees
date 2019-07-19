import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderBtn = () => (
  <Link to="/restaurants" className="order_btn">
    <FontAwesomeIcon icon="shopping-bag" />
  </Link>
);

export default OrderBtn;
