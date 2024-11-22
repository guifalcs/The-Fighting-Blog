//Imports

import PostController from "../controllers/postController";
import express, { Request, Response } from "express";

//Variáveis
const controller = new PostController();
export const postRoutes = express.Router();

//Rotas

postRoutes.get('/', async(req: Request, res: Response) => {
    const posts = await controller.getPosts();
    res.json(posts)
})

postRoutes.post('/', async(req: Request, res: Response) => {
    const post = await controller.addPosts(req, res);
    res.json(post)
})

postRoutes.delete('/' , async(req: Request, res: Response) => {
    const deletedPost = await controller.deletePost(req, res)
    res.json(deletedPost)
})