import { prisma } from "../../server"
import { User } from "@prisma/client"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"



const retrieveUserService = async (userId: string): Promise<TUserResponse> => {

    const user: User | null = await prisma.user.findFirst({
        where: {
            id: parseInt(userId)
        }
    })

    if(!user){
        throw new Error("User not found")
    }

    return userSchemaResponse.parse(user)

}


export { retrieveUserService }