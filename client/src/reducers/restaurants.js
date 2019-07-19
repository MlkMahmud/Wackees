const restaurants = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH RESTAURANTS':
      return [...payload];
    default:
      return state;
  }
};

export default restaurants;
