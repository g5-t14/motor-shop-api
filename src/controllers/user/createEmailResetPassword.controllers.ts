import { Request, Response } from "express";
import { resetPassword } from "../../services/email/updateEmailReset.service";
import { sendEmailResetPassword } from "../../services/email/createEmailReset.service";

export const sendResetEmailPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  await sendEmailResetPassword(email);
  return res.json({ message: "token send" });
};
