import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

interface ForgotPasswordFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
}

const ForgotPasswordForm = ({
  onSubmit = () => {},
}: ForgotPasswordFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-sm text-muted-foreground text-center mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Back to Sign In
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
