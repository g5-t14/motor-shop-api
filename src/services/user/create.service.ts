import { prisma } from "../../server";
import { Users } from "@prisma/client";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
  const user: Users = await prisma.users.create({ data });

  return userSchemaResponse.parse(user);
};
