const isCustomer = (state = true, { type }) => {
  switch (type) {
    case 'TOGGLE USER':
      return !state;
    default:
      return state;
  }
};

export default isCustomer;
