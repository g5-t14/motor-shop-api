import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { prisma } from "../server";

export const ensureCommentExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = Number(req.params.id);

  if (isNaN(id)) {
    throw new AppError("Comment not found", 404);
  }

  const comment = await prisma.comments.findFirst({
    where: {
      id,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  return next();
};
