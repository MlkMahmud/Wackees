const error = (state = null, { type, message }) => {
  switch (type) {
    case 'ERROR':
      return {
        type,
        message,
      };
    case 'CLEAR ERROR':
      return null;
    default:
      return state;
  }
};

export default error;
