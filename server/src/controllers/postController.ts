import PostInterface, {categoryOptions} from "../interfaces/postInterface";
import PostService from "../services/postService";
import { Response, Request } from "express";
const postService = new PostService();

export default class PostController {

    async getPosts(){
        const posts = postService.getPosts()
        return posts;
    }

    async getPostsByUser(req: Request, res: Response){
        const userId = req.body.id
        const posts = postService.getPostsByUser(userId)
        
        try{
            const posts = postService.getPostsByUser(userId)
            return posts;
        } catch(err){
            res.status(400).json(err)
        }

    }

    async addPosts(req: Request, res: Response){

        if (!Object.values(categoryOptions).includes(req.body.category)) {
            return res.status(400).json({ error: 'Categoria inválida. As categorias válidas são: mma, jiu jitsu, muay thai, boxing, all.' });
        }

        const postObject: PostInterface = {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            userId: req.body.userId
        }

        try{
            const post = await postService.addPost(postObject)
            return post;
        } catch(err){
            res.status(400).json(err)
        }
        
    }

    async deletePost(req: Request, res: Response){
        const postId = req.body.id;

        try{
            const post = await postService.deletePost(postId)
            return post;
        } catch(err){
            res.status(400).json(err)
        }
    }

}