import { Request, Response } from "express";
import { deleteAdService } from "../../services/ad/delete.service";

const deleteAdController = async (req: Request, res: Response) => {
  const adId: number = parseInt(req.params.id);

  await deleteAdService(adId);

  return res.status(204).send();
};
export { deleteAdController };
