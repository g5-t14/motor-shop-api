import { Users } from "@prisma/client"
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"
import { prisma } from "../../server"
import { AppError } from "../../errors/errors"


export const updateUserService = async (data: TUserUpdateRequest, userId: string): Promise<TUserResponse> => {

    const user: Users | null = await prisma.users.findFirst({
        where: {
            id: parseInt(userId)
        }
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const userUpdated = await prisma.users.update({
        where: {id: parseInt(userId)},
        data: { ...data }
    })

    return userSchemaResponse.parse(userUpdated)

}