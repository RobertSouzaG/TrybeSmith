import { Request, Response } from 'express';
import productService from '../service/productsService';

async function createProductController(req: Request, res: Response): Promise<void> {
  const { name, price, orderId } = req.body;
  const product = await productService.createProduct(name, price, orderId);
  res.status(201).json(product);
}

async function getAllProductsController(req: Request, res: Response): Promise<void> {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
}

export default {
  createProductController,
  getAllProductsController,
};