import PostInterface from "../interfaces/postInterface";
import PostService from "../services/postService";
import { Response, Request } from "express";
const postService = new PostService();

export default class PostController {

    async getPosts(){
        const posts = postService.getPosts()
        return posts;
    }

    async addPosts(req: Request, res: Response){
        const postObject: PostInterface = {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            userId: req.body.userId
        }

        const post = postService.addPost(postObject)
        return post;
    }

}