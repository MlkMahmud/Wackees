const findRestaurants = (history, e) => (dispatch) => {
  if (e) e.preventDefault();

  const { search } = document.forms;
  const { value: q } = search.q;

  fetch(`/api/v1/search?q=${q}`)
    .then(res => res.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      history.push('/restaurants');
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

export default findRestaurants;
