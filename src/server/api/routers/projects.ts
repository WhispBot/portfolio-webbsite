import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectsRouter = createTRPCRouter({
    getprojects: publicProcedure.query(async ({ ctx }) => {
        const result = await ctx.db.query.projects.findMany();
        return result;
    }),
});
