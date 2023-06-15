import { NextFunction, Request, Response } from "express"
import { prisma } from "../server"
import { AppError } from "../errors/errors"


export const ensureIsSellerMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userIsSeller: boolean = res.locals.isSeller
    const userId: number = Number(res.locals.userId)

    const user = await prisma.users.findFirst({
        where: {
            id: userId
        }
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    if(user.is_seller && userIsSeller){

        return next()

    }

    throw new AppError("User is not a seller")

}