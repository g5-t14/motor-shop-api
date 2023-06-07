import { TManyAdResponse } from "../../interfaces/ad.interfaces";
import { prisma } from "../../server";

const listAllAdService = async (): Promise<TManyAdResponse> => {
  const ads = prisma.ads.findMany();

  return ads;
}

export { listAllAdService };
