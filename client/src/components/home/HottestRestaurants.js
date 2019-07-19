import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RestaurantCard from './RestaurantCard';

const HottestRestaurants = ({ allRestaurants }) => (
  <section className="hottest_restaurants">
    <h3>Hottest Restaurants</h3>
    <hr />
    <div className="hottest_restaurants_container">
      {allRestaurants.map(restaurant => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
        />
      ))}
    </div>
    <Link to="/restaurants" className="hottest_restaurants_more_btn">
      View More...
    </Link>
  </section>
);

HottestRestaurants.propTypes = {
  allRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  allRestaurants: state.restaurants,
});

export default connect(mapStateToProps)(HottestRestaurants);
