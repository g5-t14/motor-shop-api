import { Router } from "express";
import { updateAdController } from "../controllers/ad/updateAdService.controllers";
import { createAdController } from "../controllers/ad/create.controller"
import { listAllAdController } from "../controllers/ad/list.controller";
import { deleteAdController } from "../controllers/ad/delete.controller";
import { findOneAdController } from "../controllers/ad/findOne.controller";
import { ensureDataIsValidMiddleware, ensureIsOwnerAdMiddleware, ensureauthMiddleware } from "../middlewares";
import { ensureAdExistsMiddleware } from "../middlewares/ensureAdExists.middlewares";
import { adSchemaRequest } from "../schemas/ad.schema";

export const adRoutes: Router = Router();

adRoutes.use(ensureauthMiddleware)
adRoutes.post("", ensureDataIsValidMiddleware(adSchemaRequest),createAdController);
adRoutes.get("", listAllAdController);
adRoutes.use("/:id", ensureAdExistsMiddleware, ensureIsOwnerAdMiddleware)
adRoutes.get("/:id", findOneAdController);
adRoutes.patch("/:id", updateAdController);
adRoutes.delete("/:id", deleteAdController);

