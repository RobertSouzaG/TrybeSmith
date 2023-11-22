import express from 'express';
import productsController from '../controller/productsController'; 
import { isValidName, isValidPrice } from '../middlewares/productsMiddleware';

const router = express.Router();

router.use(express.json());

router.post('/', isValidName, isValidPrice, productsController.createProductController);
router.get('/', productsController.getAllProductsController);

export default router;
