import { hashSync } from "bcryptjs";
import { boolean, z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z
    .string()
    .max(60)
    .transform((password) => hashSync(password, 10)),
  cpf: z.string().max(11),
  phone: z.string().max(11),
  birthdate: z.string().max(8),
  description: z.string().nullable(),
  is_seller: z.boolean().default(false)
});

const userSchemaRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
