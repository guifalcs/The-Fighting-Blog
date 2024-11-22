import PostInterface, { categoryOptions } from "../interfaces/postInterface";
import PostService from "../services/postService";
import { Response, Request } from "express";
import UserService from "../services/userService";
const postService = new PostService();
const userService = new UserService();

export default class PostController {
  async getPosts(req: Request, res: Response) {
    const posts = await postService.getPosts();

    if (!posts) {
      return res.status(400).json({ error: "No posts found", posts });
    }
    if (typeof posts != "object") {
      return res.status(500).json({ error: "Action failed" });
    }

    res.status(200).json(posts);
  }

  async getPostsByUser(req: Request, res: Response) {
    const userId = req.body.id;

    const user = await userService.getUser(userId);
    if (!user) {
      return res.status(400).json({ error: "No user found with this id" });
    }

    if (typeof userId != "string" || !userId) {
      return res
        .status(400)
        .json({ error: "User Id in the wrong format or null" });
    }

    const posts = await postService.getPostsByUser(userId);

    if (!posts) {
      return res.status(400).json({ error: "No posts found" });
    }
    if (typeof posts != "object") {
      return res.status(500).json({ error: "Action failed" });
    }

    res.status(200).json(posts);
  }

  async addPosts(req: Request, res: Response) {
    if (!Object.values(categoryOptions).includes(req.body.category)) {
      return res
        .status(400)
        .json({
          error:
            "Invalid category. Valid categories are: mma, jiu jitsu, muay thai, boxing, all.",
        });
    }

    const { title, content, category, userId } = req.body;

    const postObject: PostInterface = {
      title,
      content,
      category,
      userId,
    };

    if (title == null || content == null || userId == null) {
      return res.status(400).json({ error: "All fields must be filled" });
    }
    if (!title.trim() || !content.trim() || !userId.trim()) {
      return res.status(400).json({ error: "All fields must be filled" });
    }
    if (
      typeof title != "string" ||
      typeof content != "string" ||
      typeof userId != "string"
    ) {
      return res
        .status(400)
        .json({ erro: "Wrong types on the request fields" });
    }
    const user = await userService.getUser(userId);
    if (!user) {
      return res.status(400).json({ error: "No user found with this id" });
    }

    const post = await postService.addPost(postObject);
    res.status(201).json(post);
  }

  async deletePost(req: Request, res: Response) {
    const postId = req.body.id;

    if (!postId || typeof postId !== "string") {
      return res.status(400).json({ error: "Id do post inválido" });
    }

    const post = await postService.deletePost(postId);

    if (typeof post != "object") {
      return res.status(500).json({ error: "Action failed" });
    }

    res.status(200).json(post);
  }
}
