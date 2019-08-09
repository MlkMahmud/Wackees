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

  isAdmin: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },

  menu: {
    type: sequelize.ARRAY(sequelize.JSON),
    set(val) {
      this.setDataValue('menu', val);
    },
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
  },
});

Restaurant.hasMany(Meal);
Restaurant.hasMany(Order);
