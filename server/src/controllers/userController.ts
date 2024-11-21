import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express-serve-static-core";
import UserService from "../services/userService";
import userInterface from "../interfaces/userInterface";
const prisma = new PrismaClient();
const userService = new UserService()

export default class UserController {

    async getUsers() {
        const users = userService.getUsers()
        return users
    }

    async getUser(email: string){
        const user = userService.getUser(email)
        return user
    }

    async createUser(req: Request, res: Response) {
        const userObject: userInterface = {
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        }
        
        try{

            const user = userService.createUser(userObject)
            return user;

        }catch(e){

            return e

        }
    }

}