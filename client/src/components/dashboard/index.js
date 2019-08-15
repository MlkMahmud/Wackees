import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePic from './ProfilePic';
import AddMealCard from './AddMealCard';
import MealCard from '../menu/MealCard';
import Label from './Label';
import NewMealForm from './NewMealForm';
import EditMealForm from './EditMealForm';
import mealContoller from '../../dispatchers/manageMeals';
import '../menu/Menu.css';

const Dashboard = ({ user, manageMeals }) => (
  <main className="dashboard">
    <section className="dashboard_user_profile">
      <ProfilePic image={user.image} />
      <h2 className="dashboard_user_name">{user.name}</h2>
      <hr />
      <div className="dashboard_user_nav">
        <Link to="dashboard/" className="dashboard_user_nav_link">MEALS </Link>
        <Link to="/mymenu" className="dashboard_user_nav_link">
          MENU
          {' '}
          <FontAwesomeIcon icon="utensils" />
        </Link>
        <Link to="/orders" className="dashboard_user_nav_link">
          ORDERS
          {' '}
          <FontAwesomeIcon icon="concierge-bell" />
        </Link>
      </div>
    </section>
    <section className="dashboard_main">
      <h2>Meals</h2>
      <div className="dashboard_main_search_container">
        <form className="dashboard_main_search">
          <input type="text" placeholder="Search" />
          <button type="button">
            <FontAwesomeIcon icon="search" />
          </button>
        </form>
      </div>
      <div onClick={manageMeals} className="dashboard_main_items">
        <AddMealCard />
        {user.meals.map(item => (
          <MealCard key={item.id} item={item} label={<Label available={item.available} />}>
            <>
              <button data-item={JSON.stringify(item)} type="button" className="meal_card_edit_btn edit">EDIT</button>
              <button data-id={item.id} type="button" className="meal_card_delete_btn delete">DELETE</button>
            </>
          </MealCard>
        ))}
      </div>
    </section>
    <NewMealForm />
    <EditMealForm />
  </main>
);

Dashboard.propTypes = {
  user: PropTypes.shape().isRequired,
  manageMeals: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  user: currentUser,
});

const mapDispatchToProps = {
  manageMeals: mealContoller,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
