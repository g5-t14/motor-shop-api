import { Router } from "express"
import { createUserController } from "../controllers/user/create.controller"
import { retrieveUserController } from "../controllers/user/retrieve.controller"
import { updateUserController } from "../controllers/user/update.controller"
import { deleteUserController } from "../controllers/user/delete.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest } from "../schemas/user.schema"


const userRoutes = Router() 


userRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
userRoutes.get("/:id", retrieveUserController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)


export { userRoutes }