import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ order }) => (
  <>
    <div className="order">
      <div className="order_item">
        <span className="customer_name">
          <b>
            {order.customerName}
          </b>
        </span>
        <div className="order_price">
          <span className="order_item_name">
            {order.item}
          </span>
          <span className="order_item_price">
            {`N${order.price}`}
          </span>
        </div>
      </div>
    </div>
  </>
);

Order.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default Order;
