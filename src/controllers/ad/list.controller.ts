import { Request, Response } from "express";
import { listAllAdUserService } from "../../services/ad/listAdsUser.service";
import { TAdResponse } from "../../interfaces/ad.interfaces";

export const listAllAdUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const allAds: TAdResponse[] = await listAllAdUserService(userId);

  return res.json(allAds);
};
