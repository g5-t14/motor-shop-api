import { Request, Response } from "express";
import { createUserService } from "../../services/user/create.service";
import {
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequestWithColor = req.body;

  const newUser: TUserResponse = await createUserService(data);

  return res.status(201).json(newUser);
};
