export default class UserController {

    async addUser(name: String, email: String, password: String) {
        await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });
    }

    async getUser(email: String) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    }

}