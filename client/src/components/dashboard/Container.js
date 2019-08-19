import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mealController from '../../dispatchers/manageMeals';


const Container = ({
  children, section, manageMeals, form,
}) => (
  <section className="dashboard_main">
    <h2>{section}</h2>
    {form}
    <div onClick={manageMeals} className="dashboard_main_items">
      {children}
    </div>
  </section>
);

Container.defaultProps = {
  form: null,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  section: PropTypes.string.isRequired,
  manageMeals: PropTypes.func.isRequired,
  form: PropTypes.node,
};

const mapDispatchToProps = {
  manageMeals: mealController,
};

export default connect(null, mapDispatchToProps)(Container);
