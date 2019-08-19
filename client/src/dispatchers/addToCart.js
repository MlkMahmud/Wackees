import store from '../store';

const addToCart = e => (dispatch) => {
  const { nodeName, dataset } = e.target;
  const { currentUser, restaurant } = store.getState();

  if (currentUser.role === 'Customer' && nodeName === 'BUTTON') {
    const { id: restaurantId } = restaurant;
    const { id: itemId } = dataset;
    const url = `/api/v1/restaurants/${restaurantId}/${itemId}`;
    fetch(url, {
      method: 'POST',
    })
      .then(response => response.json())
      .then((payload) => {
        if ('message' in payload) throw Error(payload.message);
        dispatch({
          type: 'UPDATE CART',
          payload,
        });
        // Update session storage in case of a page refresh
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
  }
};

export default addToCart;
