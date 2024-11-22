import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express-serve-static-core";
import UserService from "../services/userService";
import userInterface from "../interfaces/userInterface";
const prisma = new PrismaClient();
const userService = new UserService()

export default class UserController {

    async getUsers(req: Request, res: Response) {
        const users = userService.getUsers()
        res.status(200).json(users)
    }

    async getUser(req: Request, res: Response){
        const email = req.body.email
        const user = userService.getUser(email)
        res.status(200).json(user)
    }

    async createUser(req: Request, res: Response) {

        const userObject: userInterface = {
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
            
        }
        
        const user = userService.createUser(userObject)
        res.status(201).json(user)

    }

}