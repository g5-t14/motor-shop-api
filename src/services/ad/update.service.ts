import { Ads } from "@prisma/client";
import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { adSchemaResponse } from "../../schemas/ad.schema";
import { prisma } from "../../server";

export const updateAdService = async (
  data: TAdUpdateRequest,
  adId: string
): Promise<TAdResponse> => {
  const adsUpdated = await prisma.user.update({
    where: { id: parseInt(adId) },
    data: { ...data },
  });

  return adSchemaResponse.parse(adsUpdated);
};
