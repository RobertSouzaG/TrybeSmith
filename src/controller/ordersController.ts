import { Request, Response } from 'express';
import ordersService from '../service/ordersService';

async function getAllOrdersController(req: Request, res: Response): Promise<void> {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
}

export default {
  getAllOrdersController,
};
