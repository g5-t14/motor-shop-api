import { prisma } from "../../server";
import { manyAdsSchemaResponse } from "../../schemas/ad.schema";
import { TAdResponse } from "../../interfaces/ad.interfaces";
import { Ads } from "@prisma/client";

export const listAllAdService = async (): Promise<TAdResponse[]> => {
  const ads: Ads[] = await prisma.ads.findMany({
    include: {
      pictures: true,
      user_seller: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return manyAdsSchemaResponse.parse(ads);
};
