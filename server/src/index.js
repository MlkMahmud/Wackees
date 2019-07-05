import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import commonRoutes from './routes/common';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(commonRoutes);

app.listen(port);

export default app;
