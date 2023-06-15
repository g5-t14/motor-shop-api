import { Request, Response } from "express"
import { listAllAdService } from "../../services/ad/listAllAds.service"
import { TAdResponse } from "../../interfaces/ad.interfaces"


export const listAllAdsController = async (req: Request, res: Response): Promise<Response> => {

    const ads: TAdResponse[] = await listAllAdService()

    return res.json(ads)

}