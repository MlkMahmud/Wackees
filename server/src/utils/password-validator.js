const isPasswordValid = (password, name) => {
  if (password.length < 8) return false;
  const nameArray = name.split(' ');
  for (let i = 0, len = nameArray.length; i < len; i += 1) {
    const validator = new RegExp(nameArray[i], 'i');
    if (password.match(validator)) return false;
  }
  return true;
};

export default isPasswordValid;
