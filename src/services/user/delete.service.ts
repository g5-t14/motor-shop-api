import { Users } from "@prisma/client"
import { prisma } from "../../server"
import { AppError } from "../../errors/errors"



export const deleteUserService = async (userId: string): Promise<void> => {

    const findUser: Users | null = await prisma.users.findFirst({
        where:{
             id: parseInt(userId)
        }
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    
    await prisma.users.delete({
        where:{
            id: parseInt(userId)
        }
    })
    
}