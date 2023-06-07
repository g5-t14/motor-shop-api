import { Ads } from "@prisma/client";
import { TAdResponse, TAdUpdateRequest } from "../../interfaces/ad.interfaces";
import { adSchemaResponse } from "../../schemas/ad.schema";
import { prisma } from "../../server";

export const updateAdService = async (
  data: TAdUpdateRequest,
  userId: string
): Promise<TAdResponse> => {
  const adsUpdated = await prisma.user.update({
    where: { id: parseInt(userId) },
    data: { ...data },
  });

  return adSchemaResponse.parse(adsUpdated);
};
