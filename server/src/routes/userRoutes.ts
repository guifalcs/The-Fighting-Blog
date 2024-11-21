//Imports
import UserController from "../controllers/userController";
import express, { Request, Response } from "express";

//Variáveis
const controller = new UserController();
export const userRoutes = express.Router();

//Rotas
userRoutes.get('/', async (req: Request, res: Response) => {
    const users = await controller.getUsers();
    res.json(users);
});

userRoutes.get('/getUser', async (req: Request, res: Response) => {
    const email = req.body.email
    const user = await controller.getUser(email);
    res.json(user);
});