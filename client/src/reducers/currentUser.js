const currentUser = (state = {}, { type, payload, role }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...payload,
        role,
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default currentUser;
