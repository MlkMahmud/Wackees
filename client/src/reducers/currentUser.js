const currentUser = (state = {}, { type, payload }) => {
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
    case 'LOGGED OUT':
      return {};
    default:
      return state;
  }
};

export default currentUser;
