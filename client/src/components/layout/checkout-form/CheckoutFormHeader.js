import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeCheckOutForm } from '../../../utils/handlers';

const CheckoutFormHeader = () => (
  <>
    <button
      type="button"
      className="close_checkout_form_btn"
      onClick={closeCheckOutForm}
    >
      <FontAwesomeIcon icon="times" />
    </button>
    <h4 className="title">CHECKOUT</h4>
  </>
);

export default CheckoutFormHeader;
