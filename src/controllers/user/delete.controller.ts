import { Request, Response } from "express"
import { deleteUserService } from "../../services/user/delete.service"



const deleteUserController = async (req: Request, res: Response) => {

    const userId: string = req.params.id

    const deleteUser: void = await deleteUserService(userId)

    return res.json(deleteUser)

}


export { deleteUserController }