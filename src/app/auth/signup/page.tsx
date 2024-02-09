"use client"
import * as z from "zod"
import { AuthWrapper } from '@/components/auth/authWrapper'
import React from 'react'
import {Form,FormField,FormItem,FormLabel,FormControl,FormMessage} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import { singupSchema } from "@/schema/signupSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import RedirectLinks from "@/components/auth/redirectLinks"

const SignupPage = () => {

const form = useForm<z.infer<typeof singupSchema>>({
    resolver:zodResolver(singupSchema),
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })

    const onSubmit = (values:z.infer <typeof singupSchema>)=>{
        console.log(values,"values")
    }
  return (
    <AuthWrapper cardTitle="Signup" >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField name="name" render={({field})=>(
                    <FormItem>

                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField name="email" render={({field})=>(
                    <FormItem>

                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField name="password" render={({field})=>(
                    <FormItem>

                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>

                <Button className="w-full" type="submit" variant={"destructive"}>Sign Up</Button>

            
            </form>
            <RedirectLinks
                redirectHref="/auth/login"
                text="have an account go to login"
                />
        </Form>
    </AuthWrapper>
  )
}

export default SignupPage