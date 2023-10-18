import express from 'express';
import ordersController from '../controller/ordersController';

const router = express.Router();

router.use(express.json());

router.get('/', ordersController.getAllOrdersController);

export default router;