import { Router } from "express";
import { createAdController } from "../controllers/ad/create.controller"
import { listAllController } from "../controllers/ad/list.controller";
import { deleteAdController } from "../controllers/ad/delete.controller";

const adRoutes: Router = Router();

adRoutes.post("",createAdController);
adRoutes.get("", listAllController);
adRoutes.patch("");
adRoutes.delete("/:id", deleteAdController);

export { adRoutes };
