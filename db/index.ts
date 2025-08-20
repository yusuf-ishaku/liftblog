import { createKysely } from "@vercel/postgres-kysely";
import type { Database } from "./types";

const db = createKysely<Database>();
