import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";

const createAdService = async (data:TAdRequest):Promise<TAdResponse> => {
  const ad = await prisma.ads.create({
    data: {...data}
  },
  )

  return ad
}

export { createAdService}