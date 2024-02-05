"use client";
import * as z from "zod";
import { AuthWrapper } from "@/components/ui/auth/authWrapper";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SocialLogin } from "@/components/ui/auth/socialLogin";
import RedirectLinks from "@/components/ui/auth/redirectLinks";
const LoginPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };
  return (
    <AuthWrapper cardTitle="Login">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" variant={"destructive"} type="submit">
            Login
          </Button>
        </form>

        <div className="flex justify-center items-center gap-2 my-3">
          <span className="border border-b-orange-100 w-[44%]" />
          <span className="text-semibold text-sm font-light font-mono">OR</span>
          <span className="border border-b-orange-100 w-[44%]" />
        </div>

        <SocialLogin />
        <RedirectLinks
          redirectHref="/auth/signup"
          text="don't have an account ?"
        />
      </Form>
    </AuthWrapper>
  );
};

export default LoginPage;
