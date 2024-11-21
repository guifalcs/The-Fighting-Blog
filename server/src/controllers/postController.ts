import PostService from "../services/postService";
const postService = new PostService();

export default class PostController {

    async getPosts(){
        const posts = postService.getPosts()
        return posts;
    }

}