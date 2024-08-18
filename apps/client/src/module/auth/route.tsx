import Link from "next/link";

type RouteLinkProps = {
  children: React.ReactNode;
  className?: string;
};

const Root = {
  Metadata: {
    title: "Landing Page | BeeQuant",
  },
  Path: "/" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={Root.Path} className={className}>
      {children}
    </Link>
  ),
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

const LandingPage = {
  Metadata: {
    title: "Home | BeeQuant",
  },
  Path: "/landing" as const,
  Link: ({ children, className }: RouteLinkProps) => (
    <Link href={LandingPage.Path} className={className}>
      {children}
    </Link>
  ),
}

export const AuthRoute = {
  Root,
  Login,
  Register,
  ForgetPassword,
  RegisterSuccessed,
  LandingPage,
};
