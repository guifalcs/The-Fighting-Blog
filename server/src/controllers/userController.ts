import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express-serve-static-core";
import UserService from "../services/userService";
import userInterface from "../interfaces/userInterface";
import isValidEmail from "../validators/validaEmail";

const prisma = new PrismaClient();
const userService = new UserService();

export default class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();

    if (!users) {
      return res.status(400).json({ error: "No users found" });
    }

    res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const userId = req.body.id;

    if (typeof userId != "string" || userId == null) {
      return res
        .status(400)
        .json({ error: "User Id is in the wrong type or it's null" });
    }

    const user = await userService.getUser(userId);

    if (typeof user != "object" || !user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.status(200).json(user);
  }

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (name == null || email == null || password == null) {
      return res.status(400).json({ error: "All fields must be filled" });
    }
    if (!name.trim() || !email.trim() || !password.trim()) {
      return res.status(400).json({ error: "All fields must be filled" });
    }
    if (
      typeof name != "string" ||
      typeof email != "string" ||
      typeof password != "string"
    ) {
      return res
        .status(400)
        .json({ error: "Wrong types on the request fields" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Email in the wrong format" });
    }
    const existingUser = await userService.getUser(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must have at least 6 characters" });
    }

    const userObject: userInterface = {
      name,
      email,
      password,
    };

    const user = await userService.createUser(userObject);
    if (typeof user != "object") {
      res.status(500).json({ error: "Action failed" });
    }
    res.status(201).json(user);
  }
}
