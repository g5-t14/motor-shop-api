import { hashSync } from "bcryptjs";
import {z} from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z
    .string()
    .max(60)
    .transform((password) => hashSync(password, 10)),
  reset_password: z.string(),
  cpf: z.string().max(11),
  phone: z.string().max(11),
  birthdate: z.string().max(8),
  description: z.string(),
  is_seller: z.boolean(),
  cep: z.string().max(8),
  state: z.string().max(127),
  city: z.string().max(127),
  street: z.string().max(127),
  number: z.string().max(127),
  complement: z.string().max(127),
  user_color: z.string(),
});

const resetEmailSchema = z.object({
  to: z.string().max(127),
  subject: z.string().max(127),
  text: z.string().max(127),
})




const userSchemaRequest = userSchema.omit({
  id: true,
  user_color: true,
  reset_password:true
});

const userSchemaColorRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaResetPassword = userSchema.omit({

reset_password:true,

})

const userSchemaUpdate = userSchema
  .omit({
    id: true,
    user_color: true,
    reset_password:true
    
  })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaColorRequest,
  userSchemaResponse,
  userSchemaUpdate,
  resetEmailSchema,
  userSchemaResetPassword
};
