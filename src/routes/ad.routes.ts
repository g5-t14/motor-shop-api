import { Router } from "express"
import { listAllController } from "../controllers/ad/list.controller"

const adRoutes: Router = Router() 

adRoutes.post("", )
adRoutes.get("", listAllController)
adRoutes.patch("", )
adRoutes.delete("", )


export { adRoutes }
