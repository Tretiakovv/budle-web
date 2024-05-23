import {z} from 'zod'
import {BooleanSchema, RequiredFieldSchema, SelectSchema} from "../utlis";

export const InviteWorkerSchema = z.object({
    establishmentId: SelectSchema,
    token: RequiredFieldSchema,
    options: z.array(BooleanSchema)
})

export const AddRealWorkerSchema = z.object({
    establishmentId: SelectSchema,
    workerId: SelectSchema,
    options: z.array(BooleanSchema)
})

export const EditWorkerSchema = z.object({
    establishmentId: RequiredFieldSchema,
    workerId: RequiredFieldSchema,
    options: z.array(BooleanSchema)
})