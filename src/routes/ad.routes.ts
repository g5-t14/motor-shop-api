import { Router } from "express";
import { updateAdController } from "../controllers/ad/updateAdService.controllers";
import { createAdController } from "../controllers/ad/create.controller";
import { listAllAdController } from "../controllers/ad/list.controller";
import { deleteAdController } from "../controllers/ad/delete.controller";
import { findOneAdController } from "../controllers/ad/findOne.controller";

const adRoutes: Router = Router();

adRoutes.post("");
adRoutes.patch("/:id", updateAdController);
adRoutes.post("", createAdController);
adRoutes.get("", listAllAdController);
adRoutes.get("/:id", findOneAdController);
adRoutes.delete("/:id", deleteAdController);

export { adRoutes };
