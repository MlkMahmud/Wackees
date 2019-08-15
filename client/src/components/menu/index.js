import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getRestaurantMenu from '../../dispatchers/getRestaurantMenu';
import addToCart from '../../dispatchers/addToCart';
import MealCard from './MealCard';
import './Menu.css';

const Menu = ({
  restaurant, getMenu, match, addItem,
}) => {
  useEffect(() => {
    const { id } = match.params;
    getMenu(id);
  }, []);
  return (
    <main className="dashboard">
      <section className="dashboard_user_profile">
        <div className="dashboard_user_profile_pic_container">
          <img
            className="dashboard_user_profile_pic"
            src={restaurant.image}
            alt="profile-pic"
          />
        </div>
        <h2 className="dashboard_user_name">{restaurant.name}</h2>
        <hr />
        <div className="dashboard_user_nav">
          <button type="button" className="dashboard_user_nav_link">
            FOOD
            {' '}
            <FontAwesomeIcon icon="hamburger" />
          </button>
          <button type="button" className="dashboard_user_nav_link">
            DRINKS
            {' '}
            <FontAwesomeIcon icon="wine-bottle" />
          </button>
        </div>
      </section>
      <section className="dashboard_main">
        <h2>Menu</h2>
        <div className="dashboard_main_search_container">
          <form action="/login" className="dashboard_main_search">
            <input type="search" placeholder="Search" />
            <button type="button">
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
        <div onClick={addItem} className="dashboard_main_items">
          {restaurant.menu.map(item => (
            <MealCard key={item.id} item={item}>
              <button data-id={item.id} type="button" className="meal_card_edit_btn">Add to cart</button>
            </MealCard>
          ))}
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = ({ restaurant }) => ({
  restaurant,
});

const mapDispatchToProps = {
  getMenu: getRestaurantMenu,
  addItem: addToCart,
};

Menu.propTypes = {
  getMenu: PropTypes.func.isRequired,
  restaurant: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  addItem: PropTypes.func.isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu));
