import { Request, Response } from "express";
import { sendEmailResetPasswordService } from "../../services/email/createEmailReset.service";

export const sendResetEmailPasswordController = async (req: Request, res: Response):Promise<Response> => {
  const { email } = req.body;

  await sendEmailResetPasswordService(email);
  return res.json({ message: "token send" });
};
