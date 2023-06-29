import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const ensureIsOwnerUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = Number(req.params.id);
  const userLocal: number = Number(res.locals.userId)

  const user = await prisma.users.findFirst({
    where: {
      id: userId,
    }
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.id !== userLocal) {
    throw new AppError("You don't have permission", 403);
  }

  return next();
};
