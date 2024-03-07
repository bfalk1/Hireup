
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, privateProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';

export const userRouter = createTRPCRouter({
    createUser: privateProcedure
        .input(z.object({
            username: z.string(),
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
    createProfile: privateProcedure
        .input(z.object({
            firstName: z.string(),
            lastName: z.string(),
            school: z.string(),
            program: z.string(),
            year: z.number(),
            gpa: z.number(),
            phone: z.string(),
            country: z.string(),
            streetAddress: z.string(),
            city: z.string(),
            stateProvince: z.string(),
            zipPostalCode: z.string(),
            about: z.string(),
            // For `events` and `experiences`, you would need to define their structure if they are to be included in the profile creation
            // If they're managed separately, you might not include them here
        }))
        .mutation(async ({ ctx, input }) => {
            // Directly create the profile using the provided input
            const clerkId = ctx.userId
            return ctx.db.profile.create({
                data: {
                    clerkId: clerkId,
                    firstName: input.firstName,
                    lastName: input.lastName,
                    school: input.school,
                    program: input.program,
                    year: input.year,
                    gpa: input.gpa,
                    phone: input.phone,
                    country: input.country,
                    streetAddress: input.streetAddress,
                    city: input.city,
                    stateProvince: input.stateProvince,
                    zipPostalCode: input.zipPostalCode,
                    about: input.about,
                    // Assuming `events` and `experiences` are handled separately
                } as any,
            });
        }),
    
    getUser: privateProcedure
        .query(async ({ ctx }) => {
            const userId = ctx.userId
            const user = await ctx.db.user.findUnique({
                where: { clerkId: userId  },
            });
            console.log(user)
            return user;
        }),
    getProfile: privateProcedure
        .query(async ({ ctx}) => {
            const userId = ctx.userId
            const profile = await ctx.db.profile.findUnique({
                where: { clerkId: userId  },
            });
            
            return profile;

        }),
});
