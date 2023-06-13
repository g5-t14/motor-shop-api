import { prisma }  from "../../server"
import { User } from "@prisma/client"
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"
import { AppError } from "../../errors/errors"


export const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {

    const { email } = data

    const findUser: User | null = await prisma.user.findFirst({
        where: {
            email
        }
    })
    
    if(findUser){
        throw new AppError("User already exists!", 409)
    }


    const user: User = await prisma.user.create({data})

    return userSchemaResponse.parse(user)
}
