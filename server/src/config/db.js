import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../../.env'),
});

const db = process.env.DATABASE_URL ? new Sequelize(process.env.DATABASE_URL, {
  operatorsAliases: false,
  dialect: 'postgres',
  protocol: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: true,
  },
}) : new Sequelize(process.env.DEV_DB, {
  dialect: 'postgres',
  protocol: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: false,
  },
});

db.sync({
  force: true,
});

export default db;
