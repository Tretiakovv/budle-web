import {z} from "zod"
import {RequiredFieldSchema, SelectSchema} from "../utlis";

export const CreateCategorySchema = z.object({
    name: RequiredFieldSchema,
    parentCategoryId: SelectSchema.or(z.null()),
    establishmentId: RequiredFieldSchema
})

export const EditCategorySchema = z.object({
    id : RequiredFieldSchema,
    name : RequiredFieldSchema
})