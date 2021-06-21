import { Router } from "express";
import PostController from "../controllers/postController";

const postRoutes = Router();
const postController = new PostController();

postRoutes.post('/:id', postController.createPost)
postRoutes.get('/all', postController.getAllPosts)
postRoutes.get('/:id', postController.getOnePost)
postRoutes.put('/', postController.addPost)
postRoutes.delete('/:id', postController.deletePost)

export default postRoutes;