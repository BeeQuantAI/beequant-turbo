import { z } from "zod";

const schema = z.object({
  GraphqlEndpoint: z.string().default("http://localhost:3000/graphql"),
});

type Env = keyof z.infer<typeof schema>;

const env: Record<Env, string | undefined> = {
  GraphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
};

export const getEnv = () => schema.parse(env);
