// this file is used to connect to the database
// Why it is separate? Because Next.js reconnects to the database on every request,
// so we need to make sure that we are not creating multiple connections to the database.
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
