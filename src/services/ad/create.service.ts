import { Ads } from "@prisma/client";
import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";

export const createAdService = async (data:TAdRequest, pictures: any, userId:number ) :Promise<TAdResponse> => {
  const ad: Ads = await prisma.ads.create({
    data: {
      ...data, 
      user_id: 
      userId, 
      pictures: {
        create: pictures
      }
    },
    include: {
      pictures: true
    }
  },
  )

  return adSchemaResponse.parse(ad)
}
