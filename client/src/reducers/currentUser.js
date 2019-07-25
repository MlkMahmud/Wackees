const currentUser = (state = {
  role: 'Customer',
  cart: [],
}, { type, payload }) => {
  switch (type) {
    case 'CUSTOMER LOGIN':
      return {
        ...payload,
        role: 'Customer',
      };
    case 'RESTAURANT LOGIN':
      return {
        ...payload,
        role: 'Restaurant',
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default currentUser;
