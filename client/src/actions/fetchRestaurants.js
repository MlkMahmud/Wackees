const fetchRestaurants = () => (dispatch) => {
  fetch('/api/v1/restaurants')
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('Error fetching restaurants');
    })
    .then((restaurants) => {
      dispatch({
        type: 'FETCH RESTAURANTS',
        payload: restaurants,
      });
    })
    .catch(e => dispatch({
      type: 'SERVER ERROR',
      message: e.message,
    }));
};

export default fetchRestaurants;
