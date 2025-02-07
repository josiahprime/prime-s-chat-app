import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { useToast } from "@/components/ui/use-toast";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleForgotPassword = async (values: { email: string }) => {
    try {
      // Here you would typically make an API call to send reset email
      console.log("Password reset request:", values);

      toast({
        title: "Success",
        description:
          "If an account exists with this email, you will receive a password reset link.",
      });

      navigate("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <AuthLayout title="Reset Password">
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
