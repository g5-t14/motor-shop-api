import { Request, Response } from "express";
import { listAllService } from "../../services/ad/list.service";

export async function listAllController(req: Request, res: Response): Promise<Response> {
    const allAds = await listAllService();
    return res.json(allAds);
}
