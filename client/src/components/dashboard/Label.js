import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ available }) => (
  <label htmlFor="available">
    Available
    <input type="checkbox" className="meal_card_available" value="Available" defaultChecked={JSON.parse(available)} />
  </label>
);

Label.propTypes = {
  available: PropTypes.bool.isRequired,
};

export default Label;
