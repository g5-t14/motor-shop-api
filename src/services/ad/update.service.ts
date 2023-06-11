import { AppError } from "../../errors/errors";
import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";


export const updateAdService = async (data:TAdRequest, adId:number): Promise<TAdResponse> => {
  const oldDataAd = await prisma.ads.findUnique({
    where: {id:adId}
  })

  if(!oldDataAd){
    throw new AppError("Ad not found",404)
  }

  const newData:TAdRequest = {...oldDataAd,...data}

  const updatedAd:TAdResponse = await prisma.ads.update({
    where: {id: adId},
    data: {...newData}
  },
  )
  
  return updatedAd
}
