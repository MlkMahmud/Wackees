import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RestaurantCard from '../home/RestaurantCard';
import filterRestaurants from '../../dispatchers/filterRestaurants';
import fetchRestaurants from '../../dispatchers/fetchRestaurants';
import './Restaurants.css';


const Restaurants = ({ restaurants, search, fetchAllRestaurants }) => (
  <section className="restaurants">
    <h2>Find Restaurant</h2>
    <div className="restaurants_search_bar_container">
      <form onInput={search} name="search" className="restaurants_search_bar">
        <input name="q" type="text" placeholder="Search" />
        <button type="button">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    </div>
    <p>
      {restaurants.length}
      {' '}
      match(es) found
      {' '}
      <button
        className="display_all_btn"
        type="button"
        onClick={fetchAllRestaurants}
      >
        display all
      </button>
    </p>
    <div className="restaurants_container">
      {restaurants.map(({ id, name, image }) => (
        <RestaurantCard id={id} key={id} name={name} image={image} />
      ))}
    </div>
  </section>
);

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  search: PropTypes.func.isRequired,
  fetchAllRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
});

const mapDispatchToProps = {
  search: filterRestaurants,
  fetchAllRestaurants: fetchRestaurants,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restaurants);
