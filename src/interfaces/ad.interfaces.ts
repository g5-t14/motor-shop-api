import { z } from "zod"
import { adSchema, adSchemaRequest, adSchemaResponse, adSchemaUpdate, manyAdsSchemaResponse } from "../schemas/ad.schema"

type TAd = z.infer<typeof adSchema>

type TAdRequest = z.infer<typeof adSchemaRequest>

type TAdResponse = z.infer<typeof adSchemaResponse>

type TManyAdResponse = z.infer<typeof manyAdsSchemaResponse>

type TAdUpdateRequest = z.infer<typeof adSchemaUpdate>

export {
  TAd,
  TAdRequest,
  TAdResponse,
  TAdUpdateRequest,
  TManyAdResponse
}