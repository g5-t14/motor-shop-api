import { Request, Response } from "express";
import { findOneAdService } from "../../services/ad/findOne.service";
import { TAdResponse } from "../../interfaces/ad.interfaces";

export const findOneAdController = async (req: Request, res: Response): Promise<Response> => {
  const adId: number = Number(req.params.id);
  const ad: TAdResponse = await findOneAdService(adId);

  return res.status(200).json(ad);
};

