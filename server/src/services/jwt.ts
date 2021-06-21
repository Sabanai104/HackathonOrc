import * as jwt from 'jsonwebtoken';
import * as auth from '../config/jwt.json';

export function generateToken(params = {}){
  return jwt.sign(params, auth.secret, {
    expiresIn: 86400,
  })
}