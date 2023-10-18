import { Model } from 'sequelize';
import { Order } from '../types/Order';
import OrderModel, { OrderInputtableTypes } from '../database/models/order.model';

async function getAllOrders(): Promise<Model<Order, OrderInputtableTypes>[]> {
  const orders = await OrderModel.findAll({
    include: [
      {
        association: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  
  const formattedOrders = orders.map((order: any) => {
    const formattedOrder: any = {
      id: order.id,
      userId: order.userId,
      productIds: order.productIds.map((product: any) => product.id),
    };
    return formattedOrder;
  });

  return formattedOrders;
}

export default {
  getAllOrders,
};