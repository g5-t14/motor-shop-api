import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";
import { prisma } from "../../server";

export const updateUserService = async (data: TUserUpdateRequest, userId: number): Promise<TUserResponse> => {
  const userUpdated = await prisma.users.update({
    where: { id: userId },
    data: { ...data },
  });

  return userSchemaResponse.parse(userUpdated);
};
