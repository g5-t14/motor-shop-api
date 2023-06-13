import { prisma } from "../../server";
import { Users } from "@prisma/client";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";
import { AppError } from "../../errors/errors";

export const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
  const { email } = data;

  const findUser: Users | null = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists!", 409);
  }

  const user: Users = await prisma.users.create({ data });


  return userSchemaResponse.parse(user);
};
