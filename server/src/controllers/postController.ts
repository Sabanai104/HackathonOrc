import { Request, Response } from 'express';
import Post from '../models/postSchema';
import User from '../models/userSchema'




class PostController {
    async createPost(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        try {
           const post =  await Post.create(req.body);
           await User.findByIdAndUpdate(id,{$addToSet:{myposts:post.id}})
            const findUser: any = await User.findById(id);
            if (!findUser) {
                res.status(400).send({ error: "Usuário não encontrado" })
            }
           
            


            return res.status(200).send({ message: "Post criado com sucesso!" })


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
    async updatePost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const findPost = await Post.findById(id)

            if (!findPost) {
                res.status(400).send({ erro: "Post inexistente" });
            }
            await findPost.updateOne(req.body)
            return res.status(200).send({ message: "Post atualizado com sucesso" })

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
            res.status(400).send({ error: error.message })
        }
    }
}

export default PostController;