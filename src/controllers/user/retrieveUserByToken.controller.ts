import { Request, Response } from "express";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { retrieveUserService } from "../../services/user/retrieve.service";

export const retrieveUserByTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(res.locals.userId);

  const user: TUserResponse = await retrieveUserService(userId);

  return res.json(user);
};
