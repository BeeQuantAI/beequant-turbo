import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../../module/auth";

export const Route = createLazyFileRoute("/(auth)/login")({
  component: () => <LoginForm />,
});
