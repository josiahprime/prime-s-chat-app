import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import { useToast } from "@/components/ui/use-toast";

const SignupPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      // Here you would typically make an API call to register
      console.log("Signup attempt:", values);

      toast({
        title: "Success",
        description: "Your account has been created successfully.",
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
    <AuthLayout title="Create Account">
      <SignupForm onSubmit={handleSignup} />
    </AuthLayout>
  );
};

export default SignupPage;
