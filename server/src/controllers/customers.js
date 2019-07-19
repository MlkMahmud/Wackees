import { Customer, Order } from '../models/Customer';
import { Restaurant } from '../models/Restaurant';


async function getCart(req, res) {
  try {
    const customer = await Customer.findByPk(req.userId);
    if (!customer.cart) customer.cart = [];
    res.status(200).json(customer.cart);
  } catch (e) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

async function addToCart(req, res) {
  const { id, item } = req.params;

  try {
    const restaurant = await Restaurant.findByPk(id);
    const selectedItem = restaurant.menu.find(menuItem => menuItem.id === item);
    if (!selectedItem) res.status(404).json({ message: 'Selected Item does not exist or is currently not available' });
    else {
      const customer = await Customer.findByPk(req.userId);
      const cart = customer.cart || [];
      cart.push(selectedItem);
      customer.cart = cart;
      await customer.save();
      res.redirect('/api/v1/cart');
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function removeFromCart(req, res) {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(req.userId);
    const itemToRemove = customer.cart.findIndex(item => item.id === id);
    if (itemToRemove === -1) return res.redirect('/api/v1/cart');
    const { cart } = customer;
    cart.splice(itemToRemove, 1);
    customer.cart = cart;
    customer.save();
    return res.redirect('/api/v1/cart');
  } catch (e) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function checkOut(req, res) {
  try {
    const customer = await Customer.findByPk(req.userId);
    customer.cart.forEach(async (item) => {
      await Order.create({
        item: item.name,
        price: item.price,
        image: item.image,
        customerName: customer.name,
        customerId: customer.id,
        restaurantId: item.restaurantId,
      });
    });
    customer.cart = [];
    await customer.save();
    res.redirect('/api/v1/cart');
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function getOrderHistory(req, res) {
  Customer.findByPk(req.userId, { include: [Order] })
    .then(customer => res.status(200).json(customer.orders))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

export default {
  getCart,
  addToCart,
  removeFromCart,
  checkOut,
  getOrderHistory,
};
