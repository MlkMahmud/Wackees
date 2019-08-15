const logout = history => (dispatch) => {
  fetch('/api/v1/auth/logout')
    .then((res) => {
      if (res.ok) {
        sessionStorage.clear();
        history.push('/login');
        dispatch({
          type: 'LOGOUT',
        });
      } else throw Error('Logout failed, please try again.');
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

export default logout;
