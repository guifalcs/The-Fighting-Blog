import express from "express";
import { userRoutes } from "./routes/userRoutes";
import { postRoutes } from "./routes/postRoutes";

export const router = express.Router();

router.use('/users', userRoutes)
router.use('/posts', postRoutes)
