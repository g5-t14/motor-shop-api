import { z } from "zod";

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
  user_id: z.number(),
});

const adSchemaRequest = adSchema.omit({
  id: true,
  user_id: true,
});

const adSchemaResponse = adSchema;

const manyAdsSchemaResponse = z.array(adSchemaResponse);

const adSchemaUpdate = adSchema.partial().omit({
  id: true,
  user_id: true,
});

export {
  adSchema,
  adSchemaRequest,
  adSchemaResponse,
  adSchemaUpdate,
  manyAdsSchemaResponse,
};
