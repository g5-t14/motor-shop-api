import { Request, Response } from "express";
import { listAllAdService } from "../../services/ad/list.service";
import { Ads } from "@prisma/client";

export const listAllAdController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(res.locals.userId)

  const allAds: Ads[] = await listAllAdService(userId);
  
  return res.json(allAds);
};
