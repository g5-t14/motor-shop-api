import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";
import { Ads } from "@prisma/client";

export const updateAdService = async (data: TAdUpdateRequest, pictures:any, adId: number): Promise<TAdResponse> => {
  
  const updatedAd: Ads = await prisma.ads.update({
    where: { id: adId },
    data: {
       ...data,
       pictures: {
        update: {
          ...pictures
        }
       }
      },
      include: {
        pictures: true
      }
  });

  return adSchemaResponse.parse(updatedAd);
};
