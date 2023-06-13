import { Request, Response } from "express"
import { deleteUserService } from "../../services/user/delete.service"



export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: string = req.params.id

    const deleteUser: void = await deleteUserService(userId)

    return res.status(204).json(deleteUser)

}
