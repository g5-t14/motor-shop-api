import { compare } from "bcryptjs";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { Users } from "@prisma/client";



export const createTokenService = async ({ email, password }: TLoginRequest): Promise<string> => {


    const user: Users | null = await prisma.users.findFirst({
        where: {
            email
        }
    })

    if (!user) {
        throw new AppError("Invalid credentials", 403)
    }

    const passwordMatch: boolean = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }

    const token: string = jwt.sign(
        { userName: user.name },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1h",
            subject: user.id.toString()
        }
    )

    return token

}