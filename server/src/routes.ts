import express from "express";
import { userRoutes } from "./routes/userRoutes";

export const router = express.Router();

router.use('/users', userRoutes)

