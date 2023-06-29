import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { Ads } from "@prisma/client";
import { AppError } from "../errors/errors";

export const ensureIsOwnerAdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const adId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const ad: Ads | null = await prisma.ads.findFirst({
    where: {
      id: adId,
    },
    include: {
      user_seller: true,
    },
  });

  if (!ad) {
    throw new AppError("Ad not found", 404);
  }

  if (ad.user_id !== userId) {
    throw new AppError("You don't have permission", 403);
  }

  return next();
};
