//Imports
import UserController from "../controllers/userController";
import express, { Request, Response } from "express";

//Variáveis
const controller = new UserController();
export const userRoutes = express.Router();

//Rotas
userRoutes.get('/', async (req: Request, res: Response) => {
    const users = await controller.getUsers(req, res);
});

userRoutes.get('/getUser', async (req: Request, res: Response) => {
    const user = await controller.getUser(req, res);
});

userRoutes.post('/createUser', async (req: Request, res: Response) => {
    const user = await controller.createUser(req, res);
});