import express from 'express';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import commonRoutes from './routes/common';
import restaurantRoutes from './routes/restaurants';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(fileUpload({
  useTempFiles: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(commonRoutes);
app.use(restaurantRoutes);

app.listen(port, () => console.log(`Running on port:${port}`));

export default app;
