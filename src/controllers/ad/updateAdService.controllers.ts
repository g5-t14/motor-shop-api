import { Request, Response } from "express";
import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { updateAdService } from "../../services/ad/update.service";
import { TPicturesRequest } from "../../interfaces/pictures.interfaces";

export const updateAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adId: number = Number(req.params.id);
  const updatedValues: TAdUpdateRequest = req.body;
  const pictures: TPicturesRequest = req.body.pictures;
  delete req.body.pictures;

  const updatedAds: TAdResponse = await updateAdService(
    updatedValues,
    pictures,
    adId
  );

  return res.json(updatedAds);
};
