import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import AuthLayout from "../../components/layouts/AuthLayout ";

export default function Login() {
  return (
    <AuthLayout
      title="Login Page - Saas Template"
      meta="Login Page - SaaS Template"
    >
      <LoginForm />
    </AuthLayout>
  );
}
