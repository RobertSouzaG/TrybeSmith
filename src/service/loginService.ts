import jwt from 'jsonwebtoken';
// import { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import TokenPayload from '../types/TokenPayload';
import { Login } from '../types/Login';

const { JWT_SECRET } = process.env;

const createToken = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, JWT_SECRET!);
  return token;
};

async function login(user: Login): Promise<any> {
  const { username, password } = user;
  const userFound = await UserModel.findOne({
    where: { username },
  });

  if (!userFound || !bcrypt.compareSync(password, userFound.dataValues.password)) {
    return { 
      status: 401,
      message: 'Username or password invalid',
    };
  }

  const token = createToken({ id: userFound.dataValues.id,
    username: userFound.dataValues.username });
  return {
    status: 200,
    message: token,
  };
}

export default {
  login,
};
