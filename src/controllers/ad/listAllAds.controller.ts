import { Request, Response } from "express";
import { listAllAdService } from "../../services/ad/listAllAds.service";
import { TAdResponse } from "../../interfaces/ad.interfaces";

export const listAllAdsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { brand, color, model, fuel, year } = req.query;

  let ads: TAdResponse[] = await listAllAdService();
  let brands: string[] = [];

  if (typeof brand === "string") {
    ads = ads.filter((ad) => ad.brand.toLowerCase() === brand.toLowerCase());
  }

  if (typeof color === "string") {
    ads = ads.filter((ad) => ad.color.toLowerCase() === color.toLowerCase());
  }

  if (typeof model === "string") {
    ads = ads.filter((ad) =>
      ad.model.toLowerCase().startsWith(model.toLowerCase())
    );
  }

  if (typeof fuel === "string") {
    ads = ads.filter((ad) => ad.fuel.toLowerCase() === fuel.toLowerCase());
  }

  if (typeof year === "string") {
    ads = ads.filter((ad) => ad.year === year);
  }

  brands = Array.from(new Set(ads.map((ad) => ad.brand)));

  const colors = Array.from(new Set(ads.map((ad) => ad.color)));
  const models = Array.from(new Set(ads.map((ad) => ad.model)));
  const fuels = Array.from(new Set(ads.map((ad) => ad.fuel)));
  const years = Array.from(new Set(ads.map((ad) => ad.year)));

  return res.json(ads);
};
