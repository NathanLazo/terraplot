import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const useNewsletter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.prisma.newsletter.findUnique({
        where: {
          email: input.email,
        },
      });

      if (exists) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email already subscribed",
        });
      }

      return ctx.prisma.newsletter.create({
        data: {
          email: input.email,
        },
      });
    }),
  unsubscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.newsletter.delete({
        where: {
          email: input.email,
        },
      });
    }),
});
