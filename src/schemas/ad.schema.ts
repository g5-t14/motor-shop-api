import { z } from "zod";

const adSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.date(),
  fuel: z.string(),
  mileage: z.string(),
  color: z.enum([
    "PRETO",
    "BRANCO",
    "VERMELHO",
    "LARANJA",
    "AMARELO",
    "VERDE",
    "AZUL",
    "ANIL",
    "VIOLETA",
  ]),
  fipe_table: z.number(),
  price: z.number(),
  description: z.string(),
  cover_img: z.string(),
  is_active: z.boolean(),
});

const adSchemaRequest = adSchema.omit({
  id: true,
});

const adSchemaResponse = adSchema;

const manyAdsSchemaResponse = z.array(adSchemaResponse);

const adSchemaUpdate = adSchema
  .omit({
    id: true,
  })
  .partial();

export {
  adSchema,
  adSchemaRequest,
  adSchemaResponse,
  adSchemaUpdate,
  manyAdsSchemaResponse,
};

