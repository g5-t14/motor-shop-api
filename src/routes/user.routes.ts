import { Router } from "express"
import { createUserController } from "../controllers/user/create.controller"
import { retrieveUserController } from "../controllers/user/retrieve.controller"
import { updateUserController } from "../controllers/user/update.controller"
import { deleteUserController } from "../controllers/user/delete.controller"
import { userSchemaRequest } from "../schemas/user.schema"
import { ensureCpfExistsMiddleware, ensureDataIsValidMiddleware, ensureEmailExistsMiddleware, ensureUserExistsMiddleware, ensureauthMiddleware } from "../middlewares"
import { ensureIsOwnerUserMiddleware } from "../middlewares/ensureIsOwnerUser.middlewares"

export const userRoutes: Router = Router() 

userRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), ensureEmailExistsMiddleware, ensureCpfExistsMiddleware, createUserController)
userRoutes.use("/:id", ensureauthMiddleware, ensureIsOwnerUserMiddleware)
userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController)
userRoutes.patch("/:id", ensureUserExistsMiddleware, ensureEmailExistsMiddleware, ensureCpfExistsMiddleware, updateUserController)
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController)
