import { Router } from "express";
import PostController from "../controllers/postController";

const postRoutes = Router();
const postController = new PostController();

postRoutes.post('/:id', postController.createPost)
postRoutes.get('/all', postController.getAllPosts)
postRoutes.get('/:id', postController.getOnePost)
postRoutes.patch('/:id', postController.updatePost)
postRoutes.delete('/:id', postController.deletePost)
postRoutes.delete('/userpost/:_id', postController.deletePost)

export default postRoutes;