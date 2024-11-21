import { PrismaClient } from "@prisma/client";
import UserService from "../services/userService";
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

}