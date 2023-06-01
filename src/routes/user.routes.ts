import { Router } from "express"
import { createUserController } from "../controllers/user/create.controller"
import { retrieveUserController } from "../controllers/user/retrieve.controller"
import { updateUserController } from "../controllers/user/update.controller"
import { deleteUserController } from "../controllers/user/delete.controller"


const userRoutes = Router()


userRoutes.post("", createUserController)
userRoutes.get("/:id", retrieveUserController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)


export { userRoutes }