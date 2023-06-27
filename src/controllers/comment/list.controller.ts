import { Request, Response } from "express";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { listCommentService } from "../../services/comment/list.service";
export const listAllCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId: number = Number(req.params.id);

  const comment: TCommentResponse = await listCommentService(commentId);

  return res.json(comment);
};
