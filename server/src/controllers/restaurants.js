import bcrypt from 'bcryptjs';
import sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import { Restaurant, Meal } from '../models/Restaurant';
import { Order } from '../models/Customer';

const { Op } = sequelize;
