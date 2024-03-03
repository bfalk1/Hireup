
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, privateProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';

export const eventRouter = createTRPCRouter({
    createEvent: privateProcedure
        .input(z.object({
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().email().optional(),
            emailVerified: z.boolean().optional()
        }))
        .mutation(async ({ ctx, input }) => {
            const clerkId = ctx.userId
            const inputData = {  ...input, clerkId }; 
            const user = await ctx.db.user.create({
                data: inputData
            });
            return user;
        }),
    getEvents: privateProcedure
        .query(async ({ ctx }) => {
            const events = await ctx.db.event.findMany();
            
            return user;
        }),
    
});
