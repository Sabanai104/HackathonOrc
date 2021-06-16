import { Request, Response } from 'express';
import User from '../models/userSchema';
import isEmailValid from '../utils/validations/emailValidator';
import isPasswordValid from '../utils/validations/passwordValidator';

export default class UserController {
    createUser = async (req: Request, res: Response) => {
        const {name, userName, email, password} = req.body;
        try{
            const checkUser = await User.find({email});
            if (!checkUser)
                return res.status(400).send({message:"E-mail já cadastrado!"});
            const user = await User.create(req.body);
            return res.send({ user });
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