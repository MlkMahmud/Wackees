import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => (
  <form action="/" method="GET" className="hero_search_bar">
    <input name="name" type="search" placeholder="Find Restaurant" required />
    <button type="submit"><FontAwesomeIcon icon="search" /></button>
  </form>
);

export default SearchBar;
