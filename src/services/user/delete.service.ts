import { prisma } from "../../server";

export const deleteUserService = async (userId: number): Promise<void> => {
  await prisma.users.delete({
    where: {
      id: userId,
    },
  });
};
