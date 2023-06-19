import { Request, Response } from "express";
import { resetPassword } from "../../services/email/updateEmailReset.service";
import { sendEmailResetPassword } from "../../services/email/createEmailReset.service";

export const resetEmailPassword = async (req: Request, res: Response) => {
    const {password} = req.body
    const {token} = req.params

    await resetPassword(password, token)
    
    return res.json({message: "password alterated with sucess"})
};