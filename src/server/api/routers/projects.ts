import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projects } from "~/server/db/schema";

export const projectsRouter = createTRPCRouter({
    getprojects: publicProcedure.query(async ({ ctx }) => {
        const result = await ctx.db.query.projects.findMany();
        return result;
    }),
});
