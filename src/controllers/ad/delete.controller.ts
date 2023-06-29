import { Request, Response } from "express";
import { deleteAdService } from "../../services/ad/delete.service";

export const deleteAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adId: number = Number(req.params.id);

  await deleteAdService(adId);

  return res.status(204).send();
};
