import { TCommentResponse, TCommentsUpdateRequest} from "../../interfaces/comment.interface";
import { prisma } from "../../server";
import { Comments } from "@prisma/client";
import { commentSchemaResponse } from "../../schemas/comment.schema";
export const updateCommentService = async (data:TCommentsUpdateRequest, commentId:number):Promise<TCommentResponse>=>{

    const updatedComments: Comments = await prisma.comments.update({
        where: { id: commentId },
        data: {
           ...data
          }
      });
    
      return commentSchemaResponse.parse(updatedComments);
};













