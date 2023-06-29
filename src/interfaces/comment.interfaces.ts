import { z } from "zod";
import { 
commentSchema, 
commentSchemaResponse,     
commentSchemaRequest, 
manyCommentSchemaResponse,
commentSchemaUpdate
 } from "../schemas/comment.schema";


export type TComment = z.infer<typeof commentSchema>;

export type TCommentRequest = z.infer<typeof commentSchemaRequest>;

export type TCommentRequestUpdate = z.infer<typeof commentSchemaUpdate>;

export type TCommentResponse = z.infer<typeof commentSchemaResponse>;

export type TManyCommentsResponse = z.infer<typeof manyCommentSchemaResponse>;

export type TCommentsUpdateRequest = Partial<TCommentRequest>;