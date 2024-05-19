import {z} from 'zod'
import {RequiredFieldSchema} from "../utlis";

export const LoginSchema = z.object({
    login : RequiredFieldSchema,
    password : RequiredFieldSchema
})