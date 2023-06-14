import { prisma } from "../../server";
import { Users } from "@prisma/client";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
  const user: Users | null = await prisma.users.findFirst({
    where: {
      id: userId,
    },
  });

  return userSchemaResponse.parse(user);
};
