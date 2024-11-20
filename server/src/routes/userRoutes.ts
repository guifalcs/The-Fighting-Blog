import UserController from "../controllers/userController";
import express, { Request, Response } from "express";

const controller = new UserController();
export const userRoutes = express.Router();


userRoutes.get('/', async (req: Request, res: Response) => {
    const users = await controller.getUsers();
    res.json(users);
});
