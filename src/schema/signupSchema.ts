import * as z from "zod"

export const singupSchema = z.object({
    name:z.string().min(1,{message:"Name is required"}),
    email:z.string().email({message:"Email is required"}),
    password:z.string().min(1,{message:"Password is required"}).min(5,{message:"Minimum 5 character"})
})