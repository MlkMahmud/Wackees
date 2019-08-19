const updateProfilePic = () => (dispatch) => {
  const input = document.querySelector('.profile_pic_form input');
  const form = document.querySelector('.profile_pic_form');
  input.click();
  input.onchange = () => {
    if (input.value) {
      const { profile } = document.forms;
      const body = new FormData(profile);
      dispatch({ type: 'LOADING' });
      form.style.opacity = '0.7';
      fetch('/api/v1/upload', {
        method: 'POST',
        body,
      })
        .then((response) => {
          if (response.ok) return response.json();
          throw Error('Failed to upload profile picture, please try again.');
        })
        .then(({ image }) => {
          dispatch({
            type: 'UPDATE PROFILE',
            payload: image,
          });
          const user = JSON.parse(sessionStorage.getItem('user'));
          sessionStorage.setItem('user', JSON.stringify({ ...user, image }));
        })
        .catch(({ message }) => {
          dispatch({
            type: 'ERROR',
            message,
          });
          setTimeout(() => dispatch({
            type: 'CLEAR ERROR',
          }), 3000);
        })
        .finally(() => {
          dispatch({
            type: 'LOADED',
          });
          form.style.opacity = '0';
        });
    }
  };
};

export default updateProfilePic;
