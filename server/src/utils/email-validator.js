const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;
  // eslint-disable-next-line no-useless-escape
  const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email.match(validator) || false;
};

export default isValidEmail;
