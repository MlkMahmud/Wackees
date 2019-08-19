const getRestaurantMenu = id => (dispatch) => {
  fetch(`/api/v1/restaurants/${id}`)
    .then(response => response.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      dispatch({
        type: 'GET MENU',
        payload,
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

export default getRestaurantMenu;
