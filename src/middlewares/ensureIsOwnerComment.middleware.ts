import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { Comments } from "@prisma/client";
import { AppError } from "../errors/errors";

export const ensureIsOwnerCommentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const comment: Comments | null = await prisma.comments.findFirst({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user_id !== userId) {
    throw new AppError("You don't have permission", 403);
  }

  return next();
};
