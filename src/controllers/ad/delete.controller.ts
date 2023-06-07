import { Request, Response } from "express";
import { deleteAdService } from "../../services/ad/delete.service";

export const deleteAdController = async (req: Request, res: Response) => {
  const adId: number = parseInt(req.params.id);

  const deleteAd = await deleteAdService(adId);

  return res.json(deleteAd);
};
