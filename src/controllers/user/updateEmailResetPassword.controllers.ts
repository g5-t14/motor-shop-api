import { Request, Response } from "express";
import { resetPasswordService } from "../../services/email/updateEmailReset.service";


export const resetEmailPasswordController = async (req: Request, res: Response):Promise<Response> => {
    const {password} = req.body
    const {token} = req.params

    await resetPasswordService(password, token)
    
    return res.json({message: "password alterated with sucess"})
};