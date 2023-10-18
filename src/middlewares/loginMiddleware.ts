import { Request, Response } from 'express';

const isValidLogin = (req: Request, res: Response, next: any) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};

export default isValidLogin;