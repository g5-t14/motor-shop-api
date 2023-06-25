import { Comments } from "@prisma/client";
import { TCommentRequest,TCommentResponse } from "../../interfaces/comment.interface";
import { prisma } from "../../server";
import { commentSchemaResponse } from "../../schemas/comment.schema";

export const listCommentService = async(commentId: number): Promise<TCommentResponse> => {
  
    const comments: Comments[] = await prisma.comments.findMany({
        where: {
          id:commentId, 
        },
    });
     return commentSchemaResponse.parse(comments);
}









