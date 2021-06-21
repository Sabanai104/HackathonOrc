import { Request, Response } from 'express';
import Post from '../models/postSchema';
import User from '../models/userSchema'



class PostController {
    async createPost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await Post.create(req.body);
            const findUser = await User.findById(id);
            if (!findUser) {
                res.status(400).send({ error: "Usuário não encontrado" })
            }
            await findUser.updateOne(req.body);
            res.status(200).send({ messange: "Post criado com sucesso!" })


        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }

    async getAllPosts(req: Request, res: Response) {
        try {
            const response = await Post.find();
            res.status(200).send({ response })
            if (response == []) {
                res.status(400).send({ error: "Nenhum post existente" })
            }
        } catch (error) {
            res.status(400).send({ error: "Erro ao buscar posts" })
        }
    }
    async getOnePost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await Post.findById(id)
            res.status(200).send({ response })
        } catch (error) {

        }
    }
    async addPost(req: Request, res: Response) {
        // const { id } = req.params;
        const { name, username, posts } = req.body
        try {
            const addPosts:any = await User.findOne({
                name,
                username
            })

            if (!addPosts) {
                res.status(400).send({ erro: "Usuário inexistente" });
            }
            
            var itens = [{ posts: posts }, ...addPosts];
            

            const updatedList = await addPosts.updateOne({ myposts: itens });
            
            return res.status(200).send({updatedList})

        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }
    async deletePost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await Post.findByIdAndDelete(id);
            res.status(200).send({ message: "Post deletado com sucesso!" })
        } catch (error) {
            res.status(400).send({ error: "Falha ao deletar post" })
        }
    }
}

export default PostController;