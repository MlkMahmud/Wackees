import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddMealCard from './AddMealCard';
import Container from './Container';
import Form from './SearchBar';
import Label from './Label';
import MealCard from '../menu/MealCard';

const Meals = ({ meals }) => (
  <Container
    section="Meals"
    form={<Form />}
  >
    <>
      <AddMealCard />
      {meals.map(item => (
        <MealCard key={item.id} item={item} label={<Label available={item.available} />}>
          <>
            <button data-item={JSON.stringify(item)} type="button" className="meal_card_edit_btn edit">EDIT</button>
            <button data-id={item.id} type="button" className="meal_card_delete_btn delete">DELETE</button>
          </>
        </MealCard>
      ))}
    </>
  </Container>

);

Meals.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  meals: currentUser.meals,
});

export default connect(mapStateToProps)(Meals);
