import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";
import { Ads } from "@prisma/client";

export const updateAdService = async (data: TAdUpdateRequest, adId: number): Promise<TAdResponse> => {
  const updatedAd: Ads = await prisma.ads.update({
    where: { id: adId },
    data: { ...data },
  });

  return adSchemaResponse.parse(updatedAd);
};
