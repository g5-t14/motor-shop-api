import {z} from "zod"
import {
  userSchema,
  userSchemaColorRequest,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserRequestWithColor = z.infer<typeof userSchemaColorRequest>

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdateRequest = Partial<TUserRequest>;

export { TUser, TUserRequest, TUserRequestWithColor, TUserResponse, TUserUpdateRequest };
