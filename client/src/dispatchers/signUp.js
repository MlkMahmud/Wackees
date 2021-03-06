import store from '../store';

const signUp = (e, history) => (dispatch) => {
  e.preventDefault();
  const { register } = document.forms;
  const { value: name } = register.name;
  const { value: email } = register.email;
  const { value: password } = register.password;
  const { isCustomer } = store.getState();
  const url = isCustomer ? '/api/v1/auth/register/customer' : '/api/v1/auth/register/restaurant';
  const role = isCustomer ? 'Customer' : 'Restaurant';
  const route = isCustomer ? '/' : '/dashboard';

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `name=${name}&email=${email}&password=${password}`,
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

  register.name.value = '';
  register.email.value = '';
  register.password.value = '';
};


export default signUp;
