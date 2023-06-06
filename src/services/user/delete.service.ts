import { User } from "@prisma/client"
import { prisma } from "../../server"



const deleteUserService = async (userId: string): Promise<void> => {

    const findUser: User | null = await prisma.user.findFirst({
        where:{
             id: parseInt(userId)
        }
    })

    if(!findUser){
        throw new Error("User not found")
    }

    
    await prisma.user.delete({
        where:{
            id: parseInt(userId)
        }
    })
    
}



export { deleteUserService }