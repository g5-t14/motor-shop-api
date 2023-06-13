import { prisma } from "../../server"
import { Users } from "@prisma/client"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"
import { AppError } from "../../errors/errors"



export const retrieveUserService = async (userId: string): Promise<TUserResponse> => {

    const user: Users | null = await prisma.users.findFirst({
        where: {
            id: parseInt(userId)
        }
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    return userSchemaResponse.parse(user)

}
