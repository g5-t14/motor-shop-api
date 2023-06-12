import { AppError } from "../../errors/errors";
import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";


export const updateAdService = async (data:TAdUpdateRequest, adId:number): Promise<TAdResponse> => {
  const oldDataAd = await prisma.ads.findUnique({
    where: {id:adId}
  })

  if(!oldDataAd){
    throw new AppError("Ad not found",404)
  }

  const updatedAd:TAdResponse = await prisma.ads.update({
    where: {id: adId},
    data: {...data}
  },
  )
  
  return updatedAd
}
