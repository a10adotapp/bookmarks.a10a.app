import { PrismaClient } from "@/prisma/generated/client/index";

export const sharedClient = newClient();

export function newClient(): PrismaClient {
  const client = new PrismaClient();

  return client;
}
