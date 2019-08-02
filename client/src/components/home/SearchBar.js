import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import findRestaurant from '../../actions/findRestaurants';

const SearchBar = ({ search, history }) => (
  <form onSubmit={e => search(history, e)} name="search" className="hero_search_bar">
    <input name="q" type="search" placeholder="Find Restaurant" required />
    <button type="submit"><FontAwesomeIcon icon="search" /></button>
  </form>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

const mapDispatchToProps = {
  search: findRestaurant,
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
