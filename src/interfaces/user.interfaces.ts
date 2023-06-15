import { z } from "zod";
import {
  userSchema,
  userSchemaColorRequest,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserRequestWithColor = z.infer<typeof userSchemaColorRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdateRequest = Partial<TUserRequest>;


