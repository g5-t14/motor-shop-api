import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { prisma } from "../server";

export const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id: number = Number(req.params.id);

  if (isNaN(id)) {
    throw new AppError("User not found", 404);
  }

  const user = await prisma.users.findFirst({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};
