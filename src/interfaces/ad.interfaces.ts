import { z } from "zod";
import {
  adSchema,
  adSchemaRequest,
  adSchemaResponse,
  manyAdsSchemaResponse,
} from "../schemas/ad.schema";

type TAd = z.infer<typeof adSchema>;

type TAdRequest = z.infer<typeof adSchemaRequest>;

type TAdRequestUpdate = z.infer<typeof adSchemaRequest>

type TAdResponse = z.infer<typeof adSchemaResponse>;

type TManyAdResponse = z.infer<typeof manyAdsSchemaResponse>;

type TAdUpdateRequest = Partial<TAdRequestUpdate>;

export { TAd, TAdRequest, TAdResponse, TAdUpdateRequest, TManyAdResponse };
