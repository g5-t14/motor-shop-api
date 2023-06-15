import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/errors";

export const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const splitToken: string = token.split(" ")[1];

  jwt.verify(splitToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Invalid token", 401);
      }

      res.locals.userId = decoded.sub;
      res.locals.isSeller = decoded.isSeller

      return next();
    }
  );
};
