import { z } from "zod"


export const picturesSchema = z.object({
    id: z.number(),
    picture_1: z.string({required_error: "picture_1 required"}),
    picture_2: z.string({required_error: "picture_2 required"}),
    picture_3: z.string().nullish(),
    picture_4: z.string().nullish(),
    picture_5: z.string().nullish(),
    picture_6: z.string().nullish(),
})


export const picturesSchemaRequest = picturesSchema.omit({
    id: true
})