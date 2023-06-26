import { prisma } from "../../server";

export const deleteCommentService = async (
  commentId: number
): Promise<void> => {
  await prisma.comments.delete({
    where: {
      id: commentId,
    },
  });
  return;
};
