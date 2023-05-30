import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const useContact = createTRPCRouter({
  upload: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        message: z.string(),
        TyC: z.boolean(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.contact.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          TyC: input.TyC,
        },
      });
    }),
});
