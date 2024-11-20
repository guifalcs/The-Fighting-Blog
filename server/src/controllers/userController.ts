import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class UserController {

    async addUser(name: string, email: string, password: string) {
        await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });
    }

    async getUsers() {
        const users = await prisma.user.findMany();
        return users;
    }

}