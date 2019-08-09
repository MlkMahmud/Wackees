import sequelize from 'sequelize';
import db from '../config/db';

export const Customer = db.define('customer', {
  image: {
    type: sequelize.STRING,
    defaultValue: 'http://bit.ly/2FvrQjm',
    set(val) {
      this.setDataValue('image', val);
    },
  },

  name: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },

  cart: {
    type: sequelize.ARRAY(sequelize.JSON),
    set(val) {
      this.setDataValue('cart', val);
    },
  },
});

export const Order = db.define('order', {
  item: {
    type: sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: sequelize.NUMERIC,
    allowNull: false,
  },
  customerName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: sequelize.STRING,
  },
});

Customer.hasMany(Order);
