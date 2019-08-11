const defaultState = {
  name: '',
  image: '',
  menu: [],
};

const restaurant = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'GET MENU':
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default restaurant;
