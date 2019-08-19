const itemToUpdate = (state = {}, { type, payload }) => {
  switch (type) {
    case 'CHANGE ITEM':
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default itemToUpdate;
