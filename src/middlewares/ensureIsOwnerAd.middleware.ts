import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";

export const ensureIsOwnerAdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const adId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const ad = await prisma.ads.findFirst({
    where: {
      id: adId,
    },
    include: {
      user: true,
    },
  });

  if (!ad) {
    return res.status(404).json({
      message: "Ad not found",
    });
  }

  if (ad.user_id !== userId) {
    return res.status(403).json({
      message: "You don't have permissions",
    });
  }

  return next();
};
