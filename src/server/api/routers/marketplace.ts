import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const useMarketplace = createTRPCRouter({
  upload: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.number(),
        hash: z.string(),
        userId: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price,
          hash: input.hash,
          user: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
});
