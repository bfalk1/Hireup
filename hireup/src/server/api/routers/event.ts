
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

    enroll: privateProcedure
        .input(z.object({
            eventId: z.number(), // Event ID to associate the applicant with
            submissions: z.string().optional(), // New field for applicant submissions
        }))
        .mutation(async ({ ctx, input }) => {
            // Check if the event ID exists

            console.log(ctx.userId)
            
            const existingEvent = await ctx.db.event.findUnique({
                where: { id: input.eventId },
            });

            if (!existingEvent) {
                throw new Error("Event not found");
            }

            // Check if the profile ID exists
            const existingProfile = await ctx.db.profile.findUnique({
                where: { clerkId: ctx.userId },
            });

            if (!existingProfile) {
                throw new Error("Profile not found");
            }

            const applicant = await ctx.db.applicant.create({
                data: {
                    submissions: input.submissions,
                    event: {
                        connect: { id: existingEvent.id } // Associate applicant with the existing event
                    },
                    profile: {
                        connect: { id: existingProfile.id } // Associate applicant with the existing profile
                    }
                }
            });

            // Return the created applicant
            return applicant;
        }),




});
