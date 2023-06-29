import { prisma } from "../../server";

export const deleteAdService = async (adId: number): Promise<void> => {
  await prisma.ads.delete({
    where: {
      id: adId,
    },
  });

  return;
};
