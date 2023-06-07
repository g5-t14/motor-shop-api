import { prisma } from "../../server";

const findOneAdService = async (id: number) => {
  const ad = prisma.ads.findUnique({
    where: {
      id: id,
    },
  });

  return ad;
}

export { findOneAdService };
