import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schema";
import {
  ensureCpfExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureIsOwnerUserMiddleware,
  ensureUserExistsMiddleware,
  ensureAuthMiddleware,
} from "../middlewares";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
  sendResetEmailPasswordController,
  resetEmailPasswordController,
} from "../controllers/user";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  ensureCpfExistsMiddleware,
  createUserController
);
userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
userRoutes.use(
  "/:id",
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsOwnerUserMiddleware
);
userRoutes.patch(
  "/:id",
  ensureEmailExistsMiddleware,
  ensureCpfExistsMiddleware,
  updateUserController
);
userRoutes.delete("/:id", deleteUserController);
userRoutes.post("/resetPassword", sendResetEmailPasswordController);
userRoutes.patch("/resetPassword/:token", resetEmailPasswordController);
