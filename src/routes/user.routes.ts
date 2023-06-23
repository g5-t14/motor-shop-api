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
  forgotPasswordController,
  newPasswordController,
} from "../controllers/user";
import { retrieveUserByTokenController } from "../controllers/user/retrieveUserByToken.controller";

export const userRoutes: Router = Router();

userRoutes.post("/resetPassword", forgotPasswordController);
userRoutes.patch("/resetPassword/:token", newPasswordController);
userRoutes.patch("/:id", ensureCpfExistsMiddleware, updateUserController);
userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  ensureCpfExistsMiddleware,
  createUserController
);
userRoutes.get("/profile", ensureAuthMiddleware, retrieveUserByTokenController);
userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
userRoutes.use(
  "/:id",
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsOwnerUserMiddleware
);
userRoutes.delete("/:id", deleteUserController);
