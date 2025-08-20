import { APP_URL } from "@/config";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: APP_URL,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signIn = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await authClient.signIn.social({
    provider: "github",
  });
};
