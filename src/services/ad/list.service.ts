import { Ads } from "@prisma/client";
import { prisma } from "../../server";
import { manyAdsSchemaResponse } from "../../schemas/ad.schema";

export const listAllAdService = async (userId: number): Promise<Ads[]> => {
  const ads: Ads[] = await prisma.ads.findMany({
    where: {
      user_id: userId
    }
  })

  return manyAdsSchemaResponse.parse(ads)
}


