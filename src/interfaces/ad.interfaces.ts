import { z } from "zod";
import {
  adSchema,
  adSchemaRequest,
  adSchemaResponse,
  manyAdsSchemaResponse,
} from "../schemas/ad.schema";

export type TAd = z.infer<typeof adSchema>;

export type TAdRequest = z.infer<typeof adSchemaRequest>;

export type TAdRequestUpdate = z.infer<typeof adSchemaRequest>

export type TAdResponse = z.infer<typeof adSchemaResponse>;

export type TManyAdResponse = z.infer<typeof manyAdsSchemaResponse>;

export type TAdUpdateRequest = Partial<TAdRequestUpdate>;
