import express, {Request, Response} from 'express';
import { deleteCommentService } from '../../services/comment/delete.service';

export const deleteCommentController = async (req:Request, res:Response):Promise<Response> => {
   const commentId: number = Number(req.params.id);

   await deleteCommentService(commentId);

  return res.status(204).send();

};



