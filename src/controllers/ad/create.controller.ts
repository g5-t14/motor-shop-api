import { Request, Response } from "express";
import { TAdRequest, TAdResponse } from "../../interfaces/ad.interfaces";
import { createAdService } from "../../services/ad/create.service";

const createAdController = async(req: Request, res: Response): Promise<Response> => {
  const adData: TAdRequest = req.body

  const newDate: Date = new Date()
  newDate.setFullYear(+adData.year)
  adData.year = newDate
  
  const newAd: TAdResponse = await createAdService(adData)

  return res.status(201).json(newAd)
}

export { createAdController }