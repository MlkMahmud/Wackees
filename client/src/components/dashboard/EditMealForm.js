/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMealForms } from '../../utils/handlers';
import editMeal from '../../dispatchers/editMeal';

const EditMealForm = ({ loading, item, handleSubmit }) => (
  <form
    name="editMeal"
    className="edit_meal_form modal"
    encType="multipart/form-data"
    onSubmit={handleSubmit}
  >
    <button onClick={closeMealForms} type="button" className="close_form_btn">
      <FontAwesomeIcon icon="times" />
    </button>
    <h4>Edit Menu Item</h4>
    <label htmlFor="name">Name:</label>
    <input
      name="name"
      type="text"
      defaultValue={item.name}
      required="required"
    />
    <label htmlFor="price">Price:</label>
    <input
      name="price"
      type="number"
      defaultValue={item.price}
      required="required"
    />
    <label htmlFor="image">Image:</label>
    <input name="image" type="file" />
    <label htmlFor="available">Available:</label>
    {item.available ? (
      <>
        <span>
          True
          <input
            type="radio"
            name="available"
            value="true"
            defaultChecked
          />
        </span>
        <span>
          False
          <input type="radio" name="available" value="false" />
        </span>
      </>
    ) : (
      <>
        <span>
          True
          <input type="radio" name="available" value="true" />
        </span>
        <span>
          False
          <input
            type="radio"
            name="available"
            defaultChecked
            value="false"
          />
        </span>
      </>
    )}
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

EditMealForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  item: PropTypes.shape().isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ itemToUpdate, loading }) => ({
  item: itemToUpdate,
  loading,
});

const mapDispatchToProps = {
  handleSubmit: editMeal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMealForm);
