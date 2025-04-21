"use client";

import * as z from "zod"

import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import { Input } from "../ui/input";

import {RegisterSchema } from "@/schemas";


import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";


export const RegisterForm = () => {
const form = useForm<z.infer<typeof RegisterSchema>>({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
    email: "",
    password: "",
    confirmPassword: "",
  }, 
});


const onSubmit =(values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
}


    return(
        <CardWrapper
headerLabel="Please Register"
backButtonLabel=""
backButtonHref="#"
// showSocial
>
        <Form {...form}>

<form onSubmit={form.handleSubmit(() => {})}
className="space-y-6"
>
    <div className="space-y-4">
        <FormField
        control={form.control}
        name="email"
        render={({ field}) =>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input
                    {...field}
                    placeholder="khp@example.com"
                    type="email"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        
        />


<FormField
        control={form.control}
        name="password"
        render={({ field}) =>(
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input
                    {...field}
                    placeholder="******"
                    type="password"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>

        )}/>

<FormField
        control={form.control}
        name="confirmPassword"
        render={({ field}) =>(
            <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                    <Input
                    {...field}
                    placeholder="******"
                    type="password"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>

        )}/>

        



    </div>


    {/* message="Invalid Credentials!" */}
    {/* message="Email sent!" */}


<FormError  />
<FormSuccess  />

    <Button
    type="submit"
    className="w-full"
    >Register</Button>

</form>
        </Form>
        
        </CardWrapper>
    )
};

