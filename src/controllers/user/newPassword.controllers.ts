import { Request, Response } from "express";
import { newPasswordService } from "../../services/user/newPassword.service";

export const newPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { password } = req.body;
  const { token } = req.params;
  console.log(password, token);
  await newPasswordService(password, token);

  return res.status(200).json({ message: "password alterated with sucess" });
};
