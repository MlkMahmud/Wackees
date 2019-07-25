const deleteItemFromCart = id => (dispatch) => {
  fetch(`/api/v1/cart/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('Failed to delete item.');
    })
    .then((cart) => {
      dispatch({
        type: 'UPDATE CART',
        cart,
      });
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
