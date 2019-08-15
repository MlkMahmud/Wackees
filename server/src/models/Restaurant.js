import sequelize from 'sequelize';
import db from '../config/db';
import { Order } from './Customer';

export const Restaurant = db.define('restaurant', {
  name: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  email: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  password: {
    type: sequelize.STRING,
    allowNull: false,
  },

  image: {
    type: sequelize.STRING,
    defaultValue: 'https://bit.ly/2XujZ0x',
  },
});

export const Meal = db.define('meal', {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },

  price: {
    type: sequelize.NUMERIC,
    allowNull: false,
  },

  available: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },

  image: {
    type: sequelize.STRING,
    defaultValue: 'https://res.cloudinary.com/mlkmahmud/image/upload/v1565380262/resize.jpg',
  },

});

Restaurant.hasMany(Meal);
Restaurant.hasMany(Order);
