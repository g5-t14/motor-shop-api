import { Ads } from "@prisma/client";
import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";

export const createAdService = async (data:TAdRequest, userId:number ) :Promise<TAdResponse> => {
  console.log(userId);
  const ad: Ads = await prisma.ads.create({
    data: {...data, user_id: userId},
  },
  )

  return adSchemaResponse.parse(ad)
}
