import { hashSync } from "bcryptjs";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";



export const resetPassword = async(password:string, resetToken: string)=> {
    const user = await prisma.users.findFirst({
        where: {
            reset_password: resetToken
        }
    })

    if(!user){
        throw new AppError("user not found", 404)
    }

    await prisma.users.update({
        where: {
            id: user.id
        },
        data: {
            password: hashSync(password, 10),
            reset_password: null
        }
    })


}














