import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      // Here you would typically make an API call to authenticate
      console.log("Login attempt:", values);

      // Simulate successful login
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({ email: values.email }));

      toast({
        title: "Success",
        description: "You have been logged in successfully.",
      });

      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid email or password.",
      });
    }
  };

  return (
    <AuthLayout title="Sign In">
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
};

export default LoginPage;
