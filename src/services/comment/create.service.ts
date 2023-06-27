import { Comments } from "@prisma/client";
import { TCommentRequest,TCommentResponse } from "../../interfaces/comment.interfaces";
import { prisma } from "../../server";
import { commentSchemaResponse } from "../../schemas/comment.schema";

export const createCommentService = async (
  data: TCommentRequest,
  userId: number,
  adId: number
): Promise<TCommentResponse> => {
  const comment: Comments = await prisma.comments.create({
    data: {
      ...data,
      user_id: userId,
      ad_id: adId,
    },
  });

  return commentSchemaResponse.parse(comment);
};
