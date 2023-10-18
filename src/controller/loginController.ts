import { Request, Response } from 'express';
import loginService from '../service/loginService';

async function loginController(req: Request, res: Response): Promise<void> {
  const token = await loginService.login(req.body);
  if (token.status === 401) {
    res.status(401).json({
      message: token.message,
    });
  }
  if (token.status === 200) {
    res.status(200).json({
      token: token.message,
    });
  }
}

export default {
  loginController,
};