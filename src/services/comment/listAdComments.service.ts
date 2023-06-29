import { prisma } from "../../server";
import { Ads } from "@prisma/client";
import { adCommentsResponse } from "../../schemas/ad.schema";
import { TAdCommentsResponse } from "../../interfaces/ad.interfaces";

export const listAllAdCommentsService = async (
  adId: number
): Promise<TAdCommentsResponse> => {
  const comments: Ads | null = await prisma.ads.findUnique({
    where: {
      id: adId,
    },
    include: {
      comments: {
        include: {
          user: true,
        },
        orderBy: {
          id: "asc",
        },
      },
    },
  });

  return adCommentsResponse.parse(comments);
};
