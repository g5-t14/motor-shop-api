import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const ensureCpfExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { cpf } = req.body;

  if (cpf) {
    const user = await prisma.users.findFirst({
      where: {
        cpf,
      },
    });

    if (user) {
      throw new AppError("CPF already registered", 409);
    }
  }

  return next();
};
