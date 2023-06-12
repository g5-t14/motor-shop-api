import { prisma } from "../../server"
import { User } from "@prisma/client"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"
import { AppError } from "../../errors/errors"



const retrieveUserService = async (userId: string): Promise<TUserResponse> => {

    const user: User | null = await prisma.user.findFirst({
        where: {
            id: parseInt(userId)
        }
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    return userSchemaResponse.parse(user)

}


export { retrieveUserService }