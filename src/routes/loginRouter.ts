import express from 'express';
import loginController from '../controller/loginController';
import isValidLogin from '../middlewares/loginMiddleware';

const router = express.Router();

router.use(express.json());

router.post('/', isValidLogin, loginController.loginController);

export default router;