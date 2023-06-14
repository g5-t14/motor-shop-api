import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";

export const ensureIsOwnerUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = Number(req.params.id);
  const userLocal: number = Number(res.locals.userId)

  console.log(userId + "  " + userLocal);

  const user = await prisma.users.findFirst({
    where: {
      id: userId,
    }
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (user.id !== userLocal) {
    return res.status(403).json({
      message: "You don't have permissions",
    });
  }

  return next();
};