import { Request, Response, NextFunction } from "express"
import { prisma } from "../server"

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {


    const adId: string = req.params.id
    const userId: string = res.locals.userId

    const ad = await prisma.ads.findFirst({
        where: {
            id: parseInt(adId),
        },
        include: {
            user: true
        }
    })

    if (!ad) {
        return res.status(404).json({
            message: "Task not found"
        })
    }

    if (ad.user_id.toString() !== userId) {
        return res.status(403).json({
            message: "You don`t have permissions"
        })
    }

    return next()
}

export { ensureIsOwnerMiddleware }