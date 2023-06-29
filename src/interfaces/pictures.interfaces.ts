import { z } from "zod";
import { picturesSchemaRequest } from "../schemas/pictures.schema";


export type TPicturesRequest = z.infer<typeof picturesSchemaRequest>

export type TPicturesRequestUpdate = Partial<TPicturesRequest>