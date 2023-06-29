import { Request, Response } from "express";
import { forgotPasswordService } from "../../services/user/forgotPassword.service";

export const forgotPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  await forgotPasswordService(email);
  return res.status(200).json({ message: "token send" });
};
