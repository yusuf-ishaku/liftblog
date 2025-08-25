import type {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export interface Database {
  user: UserTable;
  blog: BlogTable;
  session: SessionTable;
  account: AccountTable;
  verification: VerificationTable;
}

export interface UserTable {
  id: Generated<string>;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: ColumnType<Date, string | undefined, never>;
  updatedAt: ColumnType<Date, string | undefined, never>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

export interface SessionTable {
  id: Generated<string>;
  userId: string;
  token: string;
  expiresAt: ColumnType<Date, string | undefined, never>;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: ColumnType<Date, string | undefined, never>;
  updatedAt: ColumnType<Date, string | undefined, never>;
}

export interface AccountTable {
  id: Generated<string>;
  userId: string;
  accountId: string;
  providerId: string;
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiresAt: ColumnType<Date, string | undefined, never> | null;
  refreshTokenExpiresAt: ColumnType<Date, string | undefined, never> | null;
  scope: string | null;
  idToken: string | null;
  password: string | null;
  createdAt: ColumnType<Date, string | undefined, never>;
  updatedAt: ColumnType<Date, string | undefined, never>;
}

export interface VerificationTable {
  id: Generated<string>;
  identifier: string;
  value: string;
  expiresAt: ColumnType<Date, string | undefined, never>;
  createdAt: ColumnType<Date, string | undefined, never>;
  updatedAt: ColumnType<Date, string | undefined, never>;
}

export interface BlogTable {
  id: Generated<string>;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  authorId: string;
  content: string;
  tags: JSONColumnType<string[]> | null;
  coverImage: string | null;
}
