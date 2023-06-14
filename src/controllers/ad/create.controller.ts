import { Request, Response } from "express";
import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { createAdService } from "../../services/ad/create.service";

export const createAdController = async (req: Request, res: Response): Promise<Response> => {
  const adData: TAdRequest = req.body;
  const userId: number = Number(res.locals.userId);

  const newAd: TAdResponse = await createAdService(adData, userId);

  return res.status(201).json(newAd);
};
