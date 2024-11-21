//Imports
import PostController from "../controllers/postController";
import express, { Request, Response } from "express";

//Variáveis
const controller = new PostController();
export const postRoutes = express.Router();

//Rotas

postRoutes.get('/', async(req: Request, res: Response) => {
    const posts = await controller.getPosts();
    res.json(posts);
})