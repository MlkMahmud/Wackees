import store from '../store';

const editMenuItem = e => (dispatch) => {
  e.preventDefault();
  dispatch({ type: 'LOADING' });
  const { editMeal } = document.forms;
  const body = new FormData(editMeal);
  const { id } = store.getState().itemToUpdate;

  fetch(`/api/v1/meals/${id}`, {
    method: 'PUT',
    body,
  })
    .then(response => response.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      dispatch({
        type: 'UPDATE MEALS',
        payload,
      });
      dispatch({ type: 'LOADED' });
      const user = JSON.parse(sessionStorage.getItem('user'));
      sessionStorage.setItem('user', JSON.stringify({ ...user, meals: payload }));
      document.querySelector('.modal_bg').style.display = 'none';
      document.querySelector('.edit_meal_form').style.display = 'none';
    })
    .catch(({ message }) => {
      dispatch({ type: 'LOADED' });
      dispatch({
        type: 'ERROR',
        message,
      });
      setTimeout(() => dispatch({
        type: 'CLEAR ERROR',
      }), 3000);
    });
};

export default editMenuItem;
