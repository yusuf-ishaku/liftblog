import { createKysely } from "@vercel/postgres-kysely";
import type { Database } from "./types";

export const db = createKysely<Database>();
