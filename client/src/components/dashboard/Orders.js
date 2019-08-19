import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from './Container';
import Order from './Order';

const Orders = ({ orders }) => (
  <Container
    section="Orders"
  >
    {orders.map(order => (
      <Order
        key={order.id}
        order={order}
      />
    ))}
  </Container>

);

Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  orders: currentUser.orders,
});

export default connect(mapStateToProps)(Orders);
