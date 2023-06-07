import { Request, Response } from "express";
import { listAllAdService } from "../../services/ad/list.service";
import { TManyAdResponse } from "../../interfaces/ad.interfaces";

const listAllAdController = async (req: Request, res: Response): Promise<Response> => {
  const allAds: TManyAdResponse = await listAllAdService();
  return res.json(allAds);
};

export { listAllAdController };
