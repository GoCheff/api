import { PrismaClient } from "@prisma/client";
import { runSeeds } from "./seeds";

const prisma = new PrismaClient();

runSeeds()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect().then(() => console.log("Disconnected from database"));
  });
