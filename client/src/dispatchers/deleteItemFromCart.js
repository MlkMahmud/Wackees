const deleteItemFromCart = id => (dispatch) => {
  fetch(`/api/v1/cart/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      dispatch({
        type: 'UPDATE CART',
        payload,
      });
      const user = JSON.parse(sessionStorage.getItem('user'));
      sessionStorage.setItem('user', JSON.stringify({ ...user, cart: payload }));
    })
    .catch(({ message }) => {
      dispatch({
        type: 'ERROR',
        message,
      });
      setTimeout(() => dispatch({
        type: 'CLEAR ERROR',
      }), 3000);
    });
};

export default deleteItemFromCart;
