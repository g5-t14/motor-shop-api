import { Comments } from "@prisma/client";
import { TCommentRequest,TCommentResponse } from "../../interfaces/comment.interfaces";
import { prisma } from "../../server";
import { commentSchemaResponse } from "../../schemas/comment.schema";
import { AppError } from "../../errors/errors";

export const createCommentService = async (
  data: TCommentRequest,
  userId: number,
  adId: number,
): Promise<TCommentResponse> => {
  const user = await prisma.users.findUnique({
    where:{
      id: userId
    }
  })

  if(user){
  const comment: Comments = await prisma.comments.create({
    data: {
      ...data,
      user_id: userId,
      ad_id: adId,
      username: user?.name
    },
  
  });

  return commentSchemaResponse.parse(comment);

  }

  throw new AppError("User not found!",404)
};
