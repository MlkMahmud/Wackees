const manageMeals = e => (dispatch) => {
  const { target } = e;
  if (target.nodeName === 'BUTTON') {
    if (target.classList.contains('edit')) {
      const { item } = target.dataset;
      dispatch({
        type: 'CHANGE ITEM',
        payload: JSON.parse(item),
      });
      document.querySelector('.modal_bg').style.display = 'block';
      document.querySelector('.edit_meal_form').style.display = 'block';
    } else if (target.classList.contains('delete')) {
      const { id } = target.dataset;
      fetch(`/api/v1/meals/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then((payload) => {
          if ('message' in payload) throw Error(payload.message);
          dispatch({
            type: 'UPDATE MEALS',
            payload,
          });
          const user = JSON.parse(sessionStorage.getItem('user'));
          sessionStorage.setItem('user', JSON.stringify({ ...user, meals: payload }));
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
  }
};

export default manageMeals;
