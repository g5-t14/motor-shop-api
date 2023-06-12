import {z} from "zod"
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdateRequest = Partial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdateRequest };
