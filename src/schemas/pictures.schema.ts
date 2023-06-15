import { z } from "zod"



export const picturesSchema = z.object({
    id: z.number(),
    picture_1: z.string(),
    picture_2: z.string(),
    picture_3: z.string(),
    picture_4: z.string(),
    picture_5: z.string(),
    picture_6: z.string(),
})


export const picturesSchemaRequest = picturesSchema.omit({
    id: true
})