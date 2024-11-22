import { PrismaClient } from "@prisma/client";
import PostInterface from "../interfaces/postInterface";
const prisma = new PrismaClient();

export default class PostService {

    async getPosts(){
        const posts = await prisma.post.findMany();
        return posts;
    }

    async getPostsByUser(id: string){
        const posts = await prisma.post.findMany({where: {userId: id}})
        return posts;
    }

    async addPost(postData: PostInterface){
        const createdPost = await prisma.post.create({data: postData});
        return createdPost;
    }

    async deletePost(id: string){
        const deletedPost = await prisma.post.delete({where: {id: id}});
        return deletedPost;
    }
} 