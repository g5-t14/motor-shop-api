import { prisma } from "../../server";

export const deleteAdService = async (id: string) => {
  const ad = await prisma.ads.deleteMany({
    where: {
      id: id,
    },
  });

  return ad;
};
