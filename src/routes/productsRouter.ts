import express from 'express';
import productsController from '../controller/productsController'; 

const router = express.Router();

router.use(express.json());

router.post('/', productsController.createProductController);
router.get('/', productsController.getAllProductsController);

export default router;
