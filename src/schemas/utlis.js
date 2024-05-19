import {z} from "zod"
import {REQUIRED_FIELD} from "./constants";

export const RequiredFieldSchema = z.string().min(1, REQUIRED_FIELD)
export const RequiredEmailSchema = RequiredFieldSchema.email()