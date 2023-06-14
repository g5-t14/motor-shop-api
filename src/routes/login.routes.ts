import { Router } from "express"
import { createTokenController } from "../controllers/login/login.controller"

export const loginRoutes: Router = Router();

loginRoutes.post("", createTokenController);
