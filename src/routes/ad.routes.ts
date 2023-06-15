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
  listAllAdUserController,
  listAllAdsController,
  updateAdController,
} from "../controllers/ad";

export const adRoutes: Router = Router();

adRoutes.get("", listAllAdsController)
adRoutes.get("/:id", findOneAdController);
adRoutes.get("/seller/:id", listAllAdUserController);
adRoutes.use(ensureAuthMiddleware, ensureIsSellerMiddleware)
adRoutes.post("", ensureDataIsValidMiddleware(adSchemaRequest), createAdController);
adRoutes.use("/:id", ensureAdExistsMiddleware, ensureIsOwnerAdMiddleware)
adRoutes.patch("/:id", ensureDataIsValidMiddleware(adSchemaUpdate), updateAdController);
adRoutes.delete("/:id", deleteAdController);
