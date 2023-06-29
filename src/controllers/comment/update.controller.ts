import { Request, Response } from "express";
import {
  TCommentResponse,
  TCommentsUpdateRequest,
} from "../../interfaces/comment.interfaces";
import { updateCommentService } from "../../services/comment/update.service";

export const updateCommentController = async (req: Request, res: Response) => {
  const commentId: number = Number(req.params.id);
  const updatedValues: TCommentsUpdateRequest = req.body;

  const updatedComments: TCommentResponse = await updateCommentService(
    updatedValues,
    commentId
  );

  return res.json(updatedComments);
};
