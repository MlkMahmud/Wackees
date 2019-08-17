const cartCheckout = (e, customerCart) => (dispatch) => {
  e.preventDefault();
  if (customerCart.length === 0) {
    dispatch({
      type: 'ERROR',
      message: "Can't checkout empty cart",
    });
    setTimeout(() => dispatch({
      type: 'CLEAR ERROR',
    }), 3000);
  } else {
    fetch('/api/v1/checkout')
      .then((res) => {
        if (res.ok) return res.json();
        throw Error('Cart Checkout Failed');
      })
      .then(payload => dispatch({
        type: 'UPDATE CART',
        payload,
      }))
      .catch(({ message }) => {
        dispatch({
          type: 'ERROR',
          message,
        });
        setTimeout(() => dispatch({
          type: 'CLEAR ERROR',
        }), 3000);
      });
  }
  document.querySelector('.modal_bg').style.display = 'none';
  document.querySelector('.checkout_form').style.display = 'none';
};

export default cartCheckout;
