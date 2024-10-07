import { Link } from "@src/configs/navigation";
import React from "react";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Login = {
  Metadata: {
    title: "Sign In | BeeQuant",
  },
  Path: "/login" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Login.Path} className={className}>
      {children}
    </Link>
  ),
};

const Register = {
  Metadata: {
    title: "Sign Up | BeeQuant",
  },
  Path: "/register" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Register.Path} className={className}>
      {children}
    </Link>
  ),
};

const ForgetPassword = {
  Metadata: {
    title: "Forgot Password | BeeQuant",
  },
  Path: "/forgot-password" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={ForgetPassword.Path} className={className}>
      {children}
    </Link>
  ),
};

const ResetPassword = {
  Metadata: {
    title: "Reset Password | BeeQuant",
  },
  Path: "/reset-password" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={ResetPassword.Path} className={className}>
      {children}
    </Link>
  ),
};

const VerifyEmail = {
  Metadata: {
    title: "Verify Email | BeeQuant",
  },
  Path: "/verify-email" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={VerifyEmail.Path} className={className}>
      {children}
    </Link>
  ),
};

const PageNotFound = {
  Metadata: {
    title: "Page Not Found | BeeQuant",
  },
  Path: "/not-found" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={PageNotFound.Path} className={className}>
      {children}
    </Link>
  ),
};

const validRoutes = [
  "/",
  "login",
  "register",
  "forgot-password",
  "reset-password",
  "verify-email",
  "account/change/password",
  "account/management",
  "account/setting",
  "appsetting",
  "dashboard",
  "dashboard/leads",
  "dashboard/profile",
  "exchange",
  "exchange/update-exchange",
  "exchange/create-exchange",
  "crypto/exchanges",
];

export const AuthRoute = {
  Login,
  Register,
  ForgetPassword,
  ResetPassword,
  VerifyEmail,
  validRoutes,
  PageNotFound,
};
