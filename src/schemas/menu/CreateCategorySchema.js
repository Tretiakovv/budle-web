import {z} from "zod"
import {RequiredFieldSchema, SelectSchema} from "../utlis";

export const CreateCategorySchema = z.object({
    name: RequiredFieldSchema,
    parentCategoryId: SelectSchema.or(z.null()),
    establishmentId: RequiredFieldSchema
})