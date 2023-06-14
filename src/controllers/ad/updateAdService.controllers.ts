import { Request, Response } from "express";
import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { updateAdService } from "../../services/ad/update.service";

export const updateAdController = async (req: Request, res: Response): Promise<Response> => {
  const adId: number = Number(req.params.id);

  const updatedValues: TAdUpdateRequest = req.body;

  const updatedAds: TAdResponse = await updateAdService(updatedValues, adId);

  return res.json(updatedAds);
};
