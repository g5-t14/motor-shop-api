import { Ads } from "@prisma/client";
import { prisma } from "../../server";
import { manyAdsSchemaResponse } from "../../schemas/ad.schema";
import { TAdResponse } from "../../interfaces/ad.interfaces";

export const listAllAdUserService = async (userId: number): Promise<TAdResponse[]> => {
  const ads: Ads[] = await prisma.ads.findMany({
    where: {
      user_id: userId,
    },
    include: {
      pictures: true,
      user_seller: true
    }
    ,
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return manyAdsSchemaResponse.parse(ads);
};
