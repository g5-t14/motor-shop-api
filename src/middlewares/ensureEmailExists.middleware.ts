import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const ensureEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (email) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};
