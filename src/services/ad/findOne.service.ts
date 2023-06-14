import { Ads } from "@prisma/client";
import { TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";

export const findOneAdService = async (adId: number): Promise<TAdResponse> => {
  const ad: Ads | null = await prisma.ads.findUnique({
    where: {
      id: adId,
    },
  });

  return adSchemaResponse.parse(ad);
};
