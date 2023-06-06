import { prisma }  from "../../server"
import { User } from "@prisma/client"
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"


const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {

    const { email, password } = data

    const findUser: User | null = await prisma.user.findFirst({
        where: {
            email
        }
    })
    
    
    if(findUser){
        throw new Error("User already exists!")
    }


    const user: User = await prisma.user.create({data})

    return userSchemaResponse.parse(user)
}


export { createUserService }