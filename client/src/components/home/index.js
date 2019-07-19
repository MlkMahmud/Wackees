import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRestaurants from '../../actions/fetchRestaurants';
import Hero from './Hero';
import HottestRestaurants from './HottestRestaurants';
import OrderBtn from './OrderBtn';
import './Home.css';

const Home = ({ getRestaurants }) => {
  useEffect(() => getRestaurants(), []);
  return (
    <>
      <Hero />
      <HottestRestaurants />
      <OrderBtn />
    </>
  );
};

Home.propTypes = {
  getRestaurants: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getRestaurants: fetchRestaurants,
};


export default connect(null, mapDispatchToProps)(Home);
