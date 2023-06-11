import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";

export const createAdService = async (data:TAdRequest):Promise<TAdResponse> => {
  const ad = await prisma.ads.create({
    data: {...data}
  },
  )

  return ad
}
