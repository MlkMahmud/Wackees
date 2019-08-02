import store from '../store';

const fetchAllRestaurants = () => (dispatch) => {
  const { filter } = store.getState();
  if (filter.length !== 0) return;

  fetch('/api/v1/search?q')
    .then(res => res.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      dispatch({
        type: 'FILTER RESTAURANTS',
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

export default fetchAllRestaurants;
