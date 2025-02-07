import React from "react";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-6 space-y-6 bg-white">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
