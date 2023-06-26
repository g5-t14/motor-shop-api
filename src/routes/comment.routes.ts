import { Router } from "express";
import {
  createCommentController,
  updateCommentController,
  deleteCommentController,
} from "../controllers/comment";
import {
  ensureAdExistsMiddleware,
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
} from "../middlewares";
import { commentSchemaRequest } from "../schemas/comment.schema";
import { listAllAdCommentsController } from "../controllers/comment/listAdComments.controller";

export const commentRoutes: Router = Router();

commentRoutes.get(
  "/:id",
  ensureAdExistsMiddleware,
  listAllAdCommentsController
);
commentRoutes.use(ensureAuthMiddleware);
commentRoutes.post(
  "/:id",
  ensureAdExistsMiddleware,
  ensureDataIsValidMiddleware(commentSchemaRequest),
  createCommentController
);
commentRoutes.patch("/:id", updateCommentController);
commentRoutes.delete("/:id", deleteCommentController);
