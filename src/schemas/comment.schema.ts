import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  ad_id: z.number(),
  description: z.string(),
  created_at: z.date(),
  username: z.string()
});

const commentSchemaResponse = commentSchema;

const commentSchemaRequest = commentSchema.omit({
  id: true,
  user_id: true,
  ad_id: true,
  created_at: true,
  username: true
});

const manyCommentSchemaResponse = z.array(commentSchema);

const commentSchemaUpdate = commentSchema
  .omit({
    id: true,
    user_id: true,
    ad_id: true,
  })
  .deepPartial();

export {
  commentSchema,
  commentSchemaResponse,
  commentSchemaRequest,
  manyCommentSchemaResponse,
  commentSchemaUpdate,
};
