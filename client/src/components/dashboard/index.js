import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePic from './ProfilePic';
import NewMealForm from './NewMealForm';
import EditMealForm from './EditMealForm';
import Meals from './Meals';
import Menu from './Menu';
import Orders from './Orders';
import '../menu/Menu.css';


const Dashboard = ({ user }) => (
  <main className="dashboard">
    <section className="dashboard_user_profile">
      <ProfilePic image={user.image} />
      <h2 className="dashboard_user_name">{user.name}</h2>
      <hr />
      <div className="dashboard_user_nav">
        <Link to="/dashboard" className="dashboard_user_nav_link">MEALS </Link>
        <Link to="/dashboard/menu" className="dashboard_user_nav_link">
          MENU
          {' '}
          <FontAwesomeIcon icon="utensils" />
        </Link>
        <Link to="/dashboard/orders" className="dashboard_user_nav_link">
          ORDERS
          {' '}
          <FontAwesomeIcon icon="concierge-bell" />
        </Link>
      </div>
    </section>
    <Route exact path="/dashboard" component={Meals} />
    <Route path="/dashboard/menu" component={Menu} />
    <Route path="/dashboard/orders" component={Orders} />
    <NewMealForm />
    <EditMealForm />
  </main>
);

Dashboard.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  user: currentUser,
});


export default connect(mapStateToProps)(Dashboard);
