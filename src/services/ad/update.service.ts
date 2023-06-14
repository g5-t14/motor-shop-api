import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";

export const updateAdService = async (data: TAdUpdateRequest, adId: number): Promise<TAdResponse> => {
  const updatedAd: TAdResponse = await prisma.ads.update({
    where: { id: adId },
    data: { ...data },
  });

  return adSchemaResponse.parse(updatedAd);
};
