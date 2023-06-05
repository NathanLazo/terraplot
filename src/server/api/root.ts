import { createTRPCRouter } from "~/server/api/trpc";
import { useNewsletter } from "~/server/api/routers/newsletter";
import { useContact } from "~/server/api/routers/contact";
import { useCustomAuth } from "./routers/customAuth";
import { useMarketplace } from "./routers/marketplace";
import { useProfile } from "./routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  useNewsletter,
  useContact,
  useCustomAuth,
  useMarketplace,
  useProfile,
});

// export type definition of API
export type AppRouter = typeof appRouter;
