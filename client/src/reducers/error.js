const error = (state = null, { type, message }) => {
  switch (type) {
    case 'SERVER ERROR':
      return {
        type,
        message,
      };
    default:
      return state;
  }
};

export default error;
