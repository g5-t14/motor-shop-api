import { Request, Response } from "express";
import { listAllAdCommentsService } from "../../services/comment/listAdComments.service";
export const listAllAdCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adId: number = Number(req.params.id);
  const comments = await listAllAdCommentsService(adId);

  return res.json(comments);
};
