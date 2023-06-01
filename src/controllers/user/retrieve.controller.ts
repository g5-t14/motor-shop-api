import {Request, Response} from "express"
import { retrieveUserService } from "../../services/user/retrieve.service"
import { TUserResponse } from "../../interfaces/user.interfaces"



const retrieveUserController = async (req: Request, res: Response) => {

    const userId: string = req.params.id

    const user: TUserResponse = await retrieveUserService(userId)

    return res.json(user)

}


export {retrieveUserController}