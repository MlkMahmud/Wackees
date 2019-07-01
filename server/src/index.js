import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import customerRoutes from './routes/customers';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(customerRoutes);

app.listen(port);
