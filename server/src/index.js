import express from 'express';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import dotenv from 'dotenv';
import commonRoutes from './routes/common';
import restaurantRoutes from './routes/restaurants';
import customerRoutes from './routes/customers';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors({ origin: true }));
app.use(fileUpload({
  useTempFiles: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(commonRoutes);
app.use(restaurantRoutes);
app.use(customerRoutes);

app.listen(port);

export default app;
