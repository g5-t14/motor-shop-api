import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { prisma } from "../server";

export const ensureAdExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id: number = Number(req.params.id);

  if (isNaN(id)) {
    throw new AppError("Ad not found", 404);
  }

  const ad = await prisma.ads.findFirst({
    where: {
      id,
    },
  });

  if (!ad) {
    throw new AppError("Ad not found", 404);
  }

  return next();
};
