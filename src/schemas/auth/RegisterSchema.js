import {z} from 'zod'
import {RequiredEmailSchema, RequiredFieldSchema} from "../utlis";

export const RegisterSchema = z.object({
    name : RequiredFieldSchema,
    email : RequiredEmailSchema,
    phoneNumber : RequiredFieldSchema
})