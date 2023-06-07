import { prisma } from "../../server";

const deleteAdService = async (id: number) => {
  const ad = await prisma.ads.delete({
    where: {
      id,
    },
  });

  return ad;

};

export { deleteAdService };