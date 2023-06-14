import { Ads } from "@prisma/client";
import { AppError } from "../../errors/errors";
import { prisma } from "../../server";

export const deleteAdService = async (adId: number): Promise<void> => {
  const ad: Ads | null= await prisma.ads.findUnique({where: {id: adId}})

  if(!ad){
    throw new AppError("Ad not found!")
  }
  
  await prisma.ads.delete({
    where: {
      id: adId,
    },
  });
  

  return
};

