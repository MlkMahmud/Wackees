const isValidName = (name) => {
  if (name.length < 2 || name.match(/\d+/)) return false;
  return true;
};

export default isValidName;
