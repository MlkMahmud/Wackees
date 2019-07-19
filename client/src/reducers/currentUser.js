const currentUser = (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOGGED IN':
      return {
        ...payload,
      };
    case 'LOGGED OUT':
      return {};
    default:
      return state;
  }
};

export default currentUser;
