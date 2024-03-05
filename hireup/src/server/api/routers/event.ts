
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, privateProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';

export const eventRouter = createTRPCRouter({
    createEvent: privateProcedure
        .input(z.object({
            title: z.string(),
            theme: z.string(),
            description: z.string(),
            shortDescription: z.string(),
            startDate: z.string(), // Assuming date format, adjust as necessary
            endDate: z.string(),   // Assuming date format, adjust as necessary
            tags: z.string(),
            companies: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.db.event.create({
                data: {
                    title: input.title,
                    theme: input.theme,
                    description: input.description,
                    shortDescription: input.shortDescription,
                    startDate: new Date(input.startDate), // Assuming date format, adjust as necessary
                    endDate: new Date(input.endDate),     // Assuming date format, adjust as necessary
                    tags: input.tags,
                    companies: input.companies,
                    applicants: {
                    }
                }
            });
            return user;
        }),

    getEvents: privateProcedure
        .query(async ({ ctx }) => {
            const events = await ctx.db.event.findMany();
            return events;
        }),

});
