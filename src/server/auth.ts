import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { z } from "zod";
import { verify } from "argon2";

const loginSchema = z.object({
  wallet: z.string(),
  password: z.string(),
});

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      isAdmin: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    isAdmin: boolean;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    session({ session, token, user }) {
      if (token.id && session.user) {
        session.user.id = token.id as string;
        session.user.isAdmin = token.isAdmin as boolean;
      }
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        wallet: { label: "wallet", type: "text", placeholder: "wallet" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const credentialsData = await loginSchema.parseAsync(credentials);
        console.log(credentialsData);

        const user = await prisma.user.findFirst({
          where: {
            wallet: credentialsData.wallet,
          },
        });

        if (!user) {
          return null;
        }

        if (user.password && user.id) {
          const isValidPassword = await verify(
            user.password,
            credentialsData.password
          );
          console.log(isValidPassword);

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user.id,
            wallet: user.wallet,
            name: user.name,
            isAdmin: false,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    error: "/",
  },
  session: { strategy: "jwt" },
  debug: true,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
