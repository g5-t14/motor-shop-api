import { Request, Response } from "express";
import { listAllAdService } from "../../services/ad/list.service";
import { TManyAdResponse } from "../../interfaces/ad.interfaces";

export const listAllAdController = async (req: Request, res: Response): Promise<Response> => {
  const allAds: TManyAdResponse = await listAllAdService();
  
  return res.status(200).json(allAds);
};

