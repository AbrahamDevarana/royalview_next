import { PrismaClient } from "@prisma/client";

declare global {
    var item: PrismaClient | undefined;
}

export const prisma = global.item || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.item = prisma;
