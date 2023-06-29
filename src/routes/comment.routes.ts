import { Router } from "express";
import {
  createCommentController,
  updateCommentController,
  deleteCommentController,
} from "../controllers/comment";
import {
  ensureAdExistsMiddleware,
  ensureAuthMiddleware,
  ensureCommentExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureIsOwnerCommentMiddleware,
} from "../middlewares";
import {
  commentSchemaRequest,
  commentSchemaUpdate,
} from "../schemas/comment.schema";
import { listAllAdCommentsController } from "../controllers/comment/listAdComments.controller";

export const commentRoutes: Router = Router();

commentRoutes.get(
  "/:id",
  ensureAdExistsMiddleware,
  listAllAdCommentsController
);
commentRoutes.post(
  "/:id",
  ensureAuthMiddleware,
  ensureAdExistsMiddleware,
  ensureDataIsValidMiddleware(commentSchemaRequest),
  createCommentController
);
commentRoutes.use(
  "/:id",
  ensureAuthMiddleware,
  ensureCommentExistsMiddleware,
  ensureIsOwnerCommentMiddleware
);
commentRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(commentSchemaUpdate),
  updateCommentController
);
commentRoutes.delete("/:id", deleteCommentController);
