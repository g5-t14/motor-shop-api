import { Router } from "express";
import { createAdController } from "../controllers/ad/create.controller"
import { listAllAdController } from "../controllers/ad/list.controller";
import { deleteAdController } from "../controllers/ad/delete.controller";
import { findOneAdController } from "../controllers/ad/findOne.controller";

const adRoutes: Router = Router();

adRoutes.post("",createAdController);
adRoutes.get("", listAllAdController);
adRoutes.get("/:id", findOneAdController);
adRoutes.patch("");
adRoutes.delete("/:id", deleteAdController);

export { adRoutes };
