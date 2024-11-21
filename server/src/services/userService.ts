import { PrismaClient } from "@prisma/client";
import userInterface from "../interfaces/userInterface";
const prisma = new PrismaClient();

export default class UserService {

    async getUsers() {
        const users = await prisma.user.findMany();
        return users;
    }

    async getUser(email: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        return user;
    }

   async createUser(user: userInterface){
        const createdUser = await prisma.user.create({data: user});
        return createdUser;
    }
}