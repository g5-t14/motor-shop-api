import { Request, Response } from "express";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { createTokenService } from "../../services/login/createToken.service";

export const createTokenController = async (req: Request, res: Response): Promise<Response> => {
  const { email, password }: TLoginRequest = req.body;

  const tokenId: {} = await createTokenService({ email, password });

  return res.json(tokenId);
};
