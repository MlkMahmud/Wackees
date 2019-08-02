const filter = (state = [], { type, payload }) => {
  switch (type) {
    case 'FILTER RESTAURANTS':
      return [
        ...payload,
      ];
    default:
      return state;
  }
};

export default filter;
