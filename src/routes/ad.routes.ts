import { Router } from "express";
import { adSchemaRequest, adSchemaUpdate } from "../schemas/ad.schema";
import {
  ensureAdExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureIsOwnerAdMiddleware,
  ensureAuthMiddleware,
  ensureIsSellerMiddleware,
} from "../middlewares";
import {
  createAdController,
  deleteAdController,
  findOneAdController,
  listAllAdController,
  updateAdController,
} from "../controllers/ad";

export const adRoutes: Router = Router();

adRoutes.use(ensureAuthMiddleware, ensureIsSellerMiddleware)
adRoutes.post("", ensureDataIsValidMiddleware(adSchemaRequest),createAdController);
adRoutes.get("", listAllAdController);
adRoutes.use("/:id", ensureAdExistsMiddleware, ensureIsOwnerAdMiddleware)
adRoutes.get("/:id", findOneAdController);
adRoutes.patch("/:id", ensureDataIsValidMiddleware(adSchemaUpdate), updateAdController);
adRoutes.delete("/:id", deleteAdController);
