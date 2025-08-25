import { reactStartCookies } from "better-auth/react-start";
import { APP_URL } from "@/config";
import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: import.meta.env.DATABASE_URL,
    password: import.meta.env.POSTGRES_PASSWORD,
    database: import.meta.env.POSTGRES_DATABASE,
    host: import.meta.env.POSTGRES_HOST,
    user: import.meta.env.POSTGRES_USER,
  }),
  socialProviders: {
    github: {
      clientId: import.meta.env.GITHUB_CLIENT_ID!,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    },
  },
  baseURL: APP_URL,
  // NOTE make sure this is the last plugin in the array
  plugins: [reactStartCookies()],
});
