import store from '../store';

const signIn = (e, history) => (dispatch) => {
  e.preventDefault();
  const { login } = document.forms;
  const { value: email } = login.email;
  const { value: password } = login.password;
  const { isCustomer } = store.getState();
  const url = isCustomer ? '/api/v1/auth/login/customer' : '/api/v1/auth/login/restaurant';
  const role = isCustomer ? 'Customer' : 'Restaurant';
  const route = isCustomer ? '/' : '/dashboard';

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${email}&password=${password}`,
  })
    .then(res => res.json())
    .then((payload) => {
      if ('message' in payload) throw Error(payload.message);
      dispatch({
        type: 'LOGIN',
        payload,
        role,
      });
      history.push(route);
      sessionStorage.setItem('user', JSON.stringify({ ...payload, role }));
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

  login.email.value = '';
  login.password.value = '';
};

export default signIn;
