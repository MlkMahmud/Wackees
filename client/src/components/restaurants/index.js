import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAllRestaurants from '../../actions/fetchAllRestaurants';
import RestaurantCard from '../home/RestaurantCard';
import filterRestaurants from '../../actions/filterRestaurants';
import './Restaurants.css';


const Restaurants = ({ restaurants, fetchRestaurants, search }) => {
  useEffect(() => fetchRestaurants(), []);
  return (
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
      <div className="restaurants_container">
        {restaurants.map(({ id, name, image }) => (
          <RestaurantCard id={id} key={id} name={name} image={image} />
        ))}
      </div>
    </section>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({
  restaurants: filter,
});

const mapDispatchToProps = {
  fetchRestaurants: fetchAllRestaurants,
  search: filterRestaurants,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restaurants);
