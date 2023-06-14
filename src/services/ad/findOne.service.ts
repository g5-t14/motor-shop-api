import { Ads } from "@prisma/client";
import { AppError } from "../../errors/errors";
import { TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";
import { adSchemaResponse } from "../../schemas/ad.schema";

export const findOneAdService = async (adId: number):Promise<TAdResponse> => {
  const ad: Ads | null = await prisma.ads.findUnique({
    where: {
      id: adId,
    },
  });
  
  if(!ad){
    throw new AppError("Ad not found!",404)
  }

  return adSchemaResponse.parse(ad);
}

