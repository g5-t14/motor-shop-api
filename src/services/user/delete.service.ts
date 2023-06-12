import { User } from "@prisma/client"
import { prisma } from "../../server"
import { AppError } from "../../errors/errors"



const deleteUserService = async (userId: string): Promise<void> => {

    const findUser: User | null = await prisma.user.findFirst({
        where:{
             id: parseInt(userId)
        }
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    
    await prisma.user.delete({
        where:{
            id: parseInt(userId)
        }
    })
    
}



export { deleteUserService }