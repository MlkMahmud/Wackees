const fetchRestaurants = () => (dispatch) => {
  fetch('/api/v1/restaurants')
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Can't fetch restaurants, please check internet connection and try again");
    })
    .then((restaurants) => {
      dispatch({
        type: 'FETCH RESTAURANTS',
        payload: restaurants,
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

export default fetchRestaurants;
