import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class PostService {

    async getPosts(){
        const posts = await prisma.post.findMany();
        return posts;
    }

} 