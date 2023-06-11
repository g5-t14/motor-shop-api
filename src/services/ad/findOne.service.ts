import { AppError } from "../../errors/errors";
import { TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";

export const findOneAdService = async (id: number):Promise<TAdResponse> => {
  const ad = await prisma.ads.findUnique({
    where: {
      id: id,
    },
  });
  
  if(!ad){
    throw new AppError("Ad not found!",404)
  }

  return ad;
}

