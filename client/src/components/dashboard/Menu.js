import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from '../menu/MealCard';
import Container from './Container';
import Form from './SearchBar';

const Menu = ({ menu }) => (
  <Container
    section="Menu"
    form={<Form />}
  >
    {menu.map(item => (
      <MealCard key={item.id} item={item}>
        <>
          <button data-id={item.id} type="button" className="meal_card_edit_btn">Add to cart</button>
        </>
      </MealCard>
    ))}
  </Container>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  menu: currentUser.meals.filter(meal => meal.available),
});

export default connect(mapStateToProps)(Menu);
