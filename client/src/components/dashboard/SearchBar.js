import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => (
  <div className="dashboard_main_search_container">
    <form className="dashboard_main_search">
      <input type="text" placeholder="Search" />
      <button type="button">
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  </div>
);

export default SearchBar;
