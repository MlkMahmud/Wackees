/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckoutFormBody = () => (
  <>
    <label htmlFor="cardholder_name">Name on card</label>
    <input type="text" required="required" className="cardholder_name" />
    <label htmlFor="card_number">Card number</label>
    <div className="card_number">
      <input type="number" required="required" placeholder="1111 2222 3333 4444" className="number no_spinner" />
      <FontAwesomeIcon icon="credit-card" />
    </div>
    <div className="expiration">
      <div className="expiration_date">
        <label htmlFor="expiration_date">Expiration</label>
        <input type="number" required="required" placeholder="MM" className="mm" />
        <input type="number" required="required" placeholder="YY" className="yy" />
      </div>
      <div className="cvv">
        <label htmlFor="cvv">CVV</label>
        <input type="number" placeholder="***" required="required" className="cvv_input no_spinner" />
      </div>
    </div>
    <hr />
  </>
);

export default CheckoutFormBody;
