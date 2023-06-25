import {Router} from "express";
import { ensureIsOwnerUserMiddleware } from "../middlewares";
import { createCommentController,listAllCommentController,updateCommentController,deleteCommentController } from "../controllers/comment";

export const commentRoutes: Router = Router();

commentRoutes.post("", createCommentController)
commentRoutes.patch("/:id", updateCommentController)
commentRoutes.get("", listAllCommentController)
commentRoutes.delete("/:id", deleteCommentController)










