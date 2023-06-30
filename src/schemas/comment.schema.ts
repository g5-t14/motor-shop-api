import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  ad_id: z.number(),
  description: z.string(),
  created_at: z.date(),
  edited: z.boolean(),
});

const commentSchemaResponse = commentSchema
  .extend({
    user: z.object({
      id: z.number(),
      name: z.string(),
      user_color: z.string(),
    }),
  })
  .omit({
    ad_id: true,
    user_id: true,
  });

const commentSchemaRequest = commentSchema.omit({
  id: true,
  user_id: true,
  ad_id: true,
  created_at: true,
  username: true,
  edited: true,
});

const manyCommentSchemaResponse = z.array(commentSchema);

const commentSchemaUpdate = commentSchemaRequest;

export {
  commentSchema,
  commentSchemaResponse,
  commentSchemaRequest,
  manyCommentSchemaResponse,
  commentSchemaUpdate,
};
