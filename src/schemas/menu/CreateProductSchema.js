import {z} from 'zod'
import {BooleanSchema, RequiredFieldSchema, SelectSchema} from "../utlis";

export const CreateProductSchema = z.object({
    name: RequiredFieldSchema,
    price: RequiredFieldSchema,
    weightG: RequiredFieldSchema,
    description: RequiredFieldSchema,
    establishmentId: RequiredFieldSchema,
    categoryId: SelectSchema,
    isOnSale: BooleanSchema
})