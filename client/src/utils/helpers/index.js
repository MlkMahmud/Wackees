export const getCartTotal = (cart) => {
  let total = 0;
  if (cart.length !== 0) {
    for (let i = 0, len = cart.length; i < len; i += 1) {
      total += +cart[i].price;
    }
  }
  return total.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
};

export const formatPrice = price => (
  Number(price).toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  })
);
