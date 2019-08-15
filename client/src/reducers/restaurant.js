const defaultState = {
  name: '',
  image: '',
  meals: [],
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
