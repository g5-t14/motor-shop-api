import { z } from "zod";
import { picturesSchemaRequest } from "./pictures.schema";
import { commentSchema } from "./comment.schema";

const adSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  mileage: z.string(),
  color: z.enum([
    "Preto",
    "Cinza",
    "Marrom",
    "Vermelho",
    "Laranja",
    "Amarelo",
    "VerdeClaro",
    "VerdeEscuro",
    "AzulClaro",
    "AzulEscuro",
    "Roxo",
    "Rosa",
    "Branco",
  ]),
  fipe_table: z.number(),
  price: z.number(),
  description: z.string(),
  cover_img: z.string(),
  is_active: z.boolean(),
  pictures: picturesSchemaRequest,
  user_seller: z
    .object({
      id: z.number(),
      name: z.string(),
      user_color: z.string(),
      description: z.string(),
    })
    .nullish(),
});

const adSchemaRequest = adSchema.omit({
  id: true,
  user_id: true,
  user_seller: true,
  is_active: true,
  comments: true,
});

const adSchemaResponse = adSchema;

const manyAdsSchemaResponse = z.array(adSchemaResponse);

const adSchemaUpdate = adSchema
  .omit({
    id: true,
    user_id: true,
    user_seller: true,
  })
  .deepPartial();

const adCommentsResponse = z.object({
  comments: z.array(commentSchema),
});

export {
  adSchema,
  adSchemaRequest,
  adSchemaResponse,
  adSchemaUpdate,
  manyAdsSchemaResponse,
  adCommentsResponse,
};
