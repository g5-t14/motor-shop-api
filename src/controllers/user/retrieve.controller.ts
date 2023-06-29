import { Request, Response } from "express";
import { retrieveUserService } from "../../services/user/retrieve.service";
import { TUserResponse } from "../../interfaces/user.interfaces";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const user: TUserResponse = await retrieveUserService(userId);

  return res.json(user);
};
