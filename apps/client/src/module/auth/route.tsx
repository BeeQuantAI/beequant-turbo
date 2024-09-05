import { Link } from "@src/configs/navigation";

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

const RegisterSuccessed = {
  Metadata: {
    title: "Register Successed | BeeQuant",
  },
  Path: "/register-successed" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={RegisterSuccessed.Path} className={className}>
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

const VerifyEmailSuccessed = {
  Metadata: {
    title: "Verify Successed | BeeQuant",
  },
  Path: "/verify-email-successed" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={VerifyEmailSuccessed.Path} className={className}>
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
  "register-successed",
  "account/change/password",
  "account/management",
  "account/setting",
  "appsetting",
  "dashboard",
  "dashboard/leads",
  "dashboard/profile",
  "landing",
];

export const AuthRoute = {
  Login,
  Register,
  ForgetPassword,
  RegisterSuccessed,
  VerifyEmail,
  VerifyEmailSuccessed,
  PageNotFound,
  validRoutes,
};
