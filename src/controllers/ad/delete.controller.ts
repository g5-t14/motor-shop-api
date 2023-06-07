import { Request, Response } from "express";
import { deleteAdService } from "../../services/ad/delete.service";

export const deleteAdController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  const deleteAd = await deleteAdService(userId);

  return res.json(deleteAd);
};
