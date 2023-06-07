import { TManyAdResponse } from "../../interfaces/ad.interfaces";
import { manyAdsSchemaResponse } from "../../schemas/ad.schema";
import { prisma } from "../../server";

const listAllAdService = async (): Promise<TManyAdResponse> => {
  const ads = prisma.ads.findMany();

  return manyAdsSchemaResponse.parse(ads);
};

export { listAllAdService };
