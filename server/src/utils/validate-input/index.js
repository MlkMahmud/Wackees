const isValidPrice = (price) => {
  if (!price) return false;
  const validator = /^\d{2,5}$/;
  return validator.test(price) || false;
};

const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;
  // eslint-disable-next-line no-useless-escape
  const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return validator.test(email) || false;
};

const isValidPassword = (password, name) => {
  if (password.length < 8) return false;
  const nameArray = name.split(' ');
  for (let i = 0, len = nameArray.length; i < len; i += 1) {
    const validator = new RegExp(nameArray[i], 'i');
    if (validator.test(password)) return false;
  }
  return true;
};

const isValidName = (name) => {
  if (name.length < 2 || name.match(/\d+/)) return false;
  return true;
};

export default {
  isValidPrice,
  isValidEmail,
  isValidPassword,
  isValidName,
};
