/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMealForms } from '../../utils/handlers';
import addNewMeal from '../../dispatchers/addNewMeal';

const NewMealForm = ({ loading, addMeal }) => (
  <form
    name="newMeal"
    className="new_meal_form modal"
    onSubmit={addMeal}
    encType="multipart/form-data"
  >
    <button onClick={closeMealForms} type="button" className="close_form_btn">
      <FontAwesomeIcon icon="times" />
    </button>
    <h4>Add New Menu Item</h4>
    <label hmtlfor="name">Name:</label>
    <input name="name" type="text" required="required" />
    <label hmtlfor="price">Price:</label>
    <input name="price" type="number" required="required" />
    <label hmtlfor="image">Image:</label>
    <input name="image" type="file" />
    <label hmtlfor="available">Available:</label>
    <span>
      True
      <input type="radio" name="available" value="true" defaultChecked />
    </span>
    <span>
      False
      <input type="radio" name="available" value="false" />
    </span>
    {loading ? (
      <>
        <button type="submit" disabled>
          <FontAwesomeIcon icon="spinner" spin />
        </button>
      </>
    ) : (
      <>
        <button type="submit">SUBMIT</button>
      </>
    )}
  </form>
);

NewMealForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  addMeal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

const mapDispatchToProps = {
  addMeal: addNewMeal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMealForm);
