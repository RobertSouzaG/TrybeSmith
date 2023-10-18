import { Model } from 'sequelize/types';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(name: string, price: number, orderId: number): Promise<{
  id: number;
  name: string;
  price: number;
}> {
  const product = await ProductModel.create({ name, price, orderId });
  const reProduct = {
    id: product.dataValues.id,
    name: product.dataValues.name,
    price: product.dataValues.price,
  };
  return reProduct;
}

async function getAllProducts() : Promise<Model<Product, ProductInputtableTypes>[]> {
  const products = await ProductModel.findAll();
  return products;
}

export default {
  createProduct,
  getAllProducts,
};