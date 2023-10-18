import express from 'express';
import productsRouter from './routes/productsRouter';
import ordersRouter from './routes/ordersRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
