import {z} from 'zod'
import {RequiredFieldSchema, SelectSchema} from "../utlis";

export const InviteWorkerSchema = z.object({
    establishmentId : SelectSchema,
    token : RequiredFieldSchema
})

export const AddRealWorkerSchema = z.object({
    establishmentId : SelectSchema,
    workerId : SelectSchema
})