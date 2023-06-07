import { Request, Response } from "express";
import { findOneAdService } from "../../services/ad/findOne.service";

const findOneAdController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const ad = await findOneAdService(userId);

  return res.json(ad);
};

export { findOneAdController };
