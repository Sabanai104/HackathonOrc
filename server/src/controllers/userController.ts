import { Request, Response } from 'express';
import User,{ IUser } from '../models/userSchema';
import * as bcrypt from 'bcryptjs';
import {generateToken} from '../services/jwt';


export default class UserController {
    authenticateUser = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        
        try {
            const user:IUser = await User.findOne({ email }).select('+password')

            if(!user)
                return res.status(400).send({ error: 'Usuário não encontrado'})

            if(!await bcrypt.compare(password, user.password)){
                return res.status(400).send({ error: 'Senha inválida' })
            }

            user.password = undefined

            return res.status(200).send({
                user,
                token: generateToken({ id: user.id }),
                message: 'Autenticado com sucesso!'
            });
        } catch (error) {
            return res.status(400).send({ error })    
        }
    }

    createUser = async (req: Request, res: Response) => {
        const {name, userName, email, password} = req.body;
        try{
            const checkUser = await User.find({email});
            if (!checkUser)
                return res.status(400).send({ message:"E-mail já cadastrado!" });
            const user = await User.create({
                name,
                userName,
                email,
                password
            });
            return res.status(200).send({
                user: {
                    name: user.name,
                    userName: user.userName,
                    email: user.email
                },
                message: 'Usuário criado com sucesso!'
            });
        }catch(error){
            return res.status(400).send({error});
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const response = await User.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(200).json({ message: 'Falha ao pegar todos usuarios!' });
        }
    }

    getOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const response = await User.findById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(200).json({ message: 'Erro ao encontrar usuário!' });
        }
    }

    updateOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                res.status(400).json({ message: 'Erro ao encontrar usuário!' });
            }
            await user?.updateOne(req.body);
            res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar usuário!' });
        }
    }

    deleteOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: 'Usuário deletado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar usuário!' });
        }
    }
}