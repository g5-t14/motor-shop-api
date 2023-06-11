import { AppError } from "../../errors/errors";
import { prisma } from "../../server";

export const deleteAdService = async (id: number): Promise<void> => {
  const ad = await prisma.ads.findUnique({where: {id}})

  if(!ad){
    throw new AppError("Ad not found!")
  }
  
  const adDeleted = await prisma.ads.delete({
    where: {
      id,
    },
  });
  

  return
};

