import { Restaurant, Meal } from '../models/Restaurant';
import { Order } from '../models/Customer';
import validator from '../utils/validate-input';

const { isValidName, isValidPrice } = validator;

function fetchAllMeals(req, res) {
  Restaurant.findByPk(req.userId, { include: [Meal] })
    .then(restaurant => res.status(200).json(restaurant.meals))
    .catch(e => res.status(500).json(e));
}

async function addNewMeal(req, res) {
  const { name, price } = req.body;
  let { available } = req.body;
  const image = res.locals.image || 'https://res.cloudinary.com/mlkmahmud/image/upload/v1565380262/resize.jpg';

  if (isValidName(name) && isValidPrice(price)) {
    try {
      if (available !== 'true' && available !== 'false') available = 'false';
      const restaurant = await Restaurant.findByPk(req.userId);

      await Meal.create({
        name,
        price: Number(price),
        available: JSON.parse(available),
        image,
        restaurantId: restaurant.id,
      });

      return res.redirect('/api/v1/meals');
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    const error = {};
    if (!isValidName(name)) error.message = 'Name Cannot be blank or contain numbers.';
    else if (!isValidPrice(price)) error.message = 'Please Input a valid price.';
    return res.status(400).json(error);
  }
}

async function updateMeal(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const { image } = res.locals;
  let { available } = req.body;

  if (isValidName(name) && isValidPrice(price)) {
    try {
      if (available !== 'true' && available !== 'false') available = 'false';
      const restaurant = await Restaurant.findByPk(req.userId);
      const payload = {
        name,
        price: Number(price),
        available: JSON.parse(available),
      };
      if (image) payload.image = image;
      await Meal.update(payload, {
        where: { id, restaurantId: restaurant.id },
      });
      res.redirect(303, '/api/v1/meals');
    } catch (e) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    const error = {};
    if (!isValidName(name)) error.message = 'Name Cannot be blank or contain numbers.';
    else if (!isValidPrice(price)) error.message = 'Please Input a valid price.';
    res.status(400).json(error);
  }
}

async function deleteMeal(req, res) {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findByPk(req.userId);

    await Meal.destroy({
      where: {
        id,
        restaurantId: restaurant.id,
      },
    });

    const updatedRestaurant = await Restaurant.findByPk(req.userId, {
      include: [Meal],
    });

    res.json(updatedRestaurant.meals);
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function getMenu(req, res) {
  Restaurant.findByPk(req.userId, { include: [Meal] })
    .then((restaurant) => {
      const menu = restaurant.meals.filter(meal => meal.available);
      res.status(200).json(menu);
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}


function getOrders(req, res) {
  Restaurant.findByPk(req.userId, { include: [Order] })
    .then(restaurant => res.status(200).json(restaurant.orders))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

function updateProfilePhoto(req, res) {
  const { image } = res.locals;
  Restaurant.update({ image }, {
    where: { id: req.userId },
  })
    .then(() => res.status(200).json({
      message: 'Success',
      image,
    }))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

export default {
  fetchAllMeals,
  addNewMeal,
  updateMeal,
  deleteMeal,
  getMenu,
  getOrders,
  updateProfilePhoto,
};
