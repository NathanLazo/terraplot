import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const useProfile = createTRPCRouter({
  upload: publicProcedure
    .input(
      z.object({
        name: z.string(),
        lastName: z.string(),
        curp: z.string(),
        country: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.number(),
        userId: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.profileSettings.create({
        data: {
          name: input.name,
          lastName: input.lastName,
          curp: input.curp,
          country: input.country,
          address: input.address,
          city: input.city,
          state: input.state,
          zip: input.zip,
          user: { connect: { id: input.userId } },
        },
      });
    }),
});
