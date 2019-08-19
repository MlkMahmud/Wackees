import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openNewMealForm } from '../../utils/handlers';

const AddMealCard = () => (
  <div className="add_meal">
    <div className="add_meal_icon_container">
      <button onClick={openNewMealForm} type="button" className="add_meal_icon">
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  </div>
);

export default AddMealCard;
