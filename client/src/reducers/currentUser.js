const user = JSON.parse(sessionStorage.getItem('user')) || {};

const currentUser = (state = user, { type, payload, role }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...payload,
        role,
      };
    case 'LOGOUT':
      return {};
    case 'UPDATE CART':
      return {
        ...state,
        cart: payload,
      };
    case 'UPDATE MEALS':
      return {
        ...state,
        meals: payload,
      };
    default:
      return state;
  }
};

export default currentUser;
