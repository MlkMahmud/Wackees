import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Restaurants = () => (
  <section className="restaurants">
    <h2>Find Restaurant</h2>
    <div className="restaurants_search_bar_container">
      <form className="restaurants_search_bar">
        <input type="text" placeholder="Search" />
        <button type="button">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    </div>
  </section>
);

export default Restaurants;
